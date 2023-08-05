import { Alert, Modal } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'

import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker'

import {
  ConfirmDateBtn,
  ConfirmDateText,
  Container,
  DateButton,
  DateTextButton,
  DateTimePickerContainer,
  DateTimePickerLabel,
  Form,
  InputContainer,
} from './styles'

import { InputBase } from '@components/InputBase'
import { ScreenHeader } from '@components/ScreenHeader'
import { Button } from '@components/Button'
import { LabelBase } from '@components/LabelBase'

import { getFormattedDate } from '@utils/getFormattedDate'
import { getFormattedTime } from '@utils/getFormattedTime'
import { generateRandomId } from '@utils/generateRandomID'

import { addNewMeal } from '@storage/meals/addNewMeal'
import { DietButtonGroup } from '@components/DietButtonGroup'

export function CreateMeal() {
  const [showDatePicker, setShowDatePicker] = useState(false)

  const [date, setDate] = useState(new Date())

  const [name, setName] = useState('')

  const [isOnDiet, setIsOnDiet] = useState<boolean | null>(null)

  const [description, setDescription] = useState('')

  const navigation = useNavigation()

  function onChange(
    event: DateTimePickerEvent,
    selectedDate?: Date | undefined,
  ) {
    if (event.type === 'set' && selectedDate) {
      setDate(selectedDate)
    }
  }

  function handleIsOnDiet(value: boolean) {
    setIsOnDiet(value)
  }

  async function handleCreateNewMeal() {
    try {
      if (name === '' || description === '' || isOnDiet === null) {
        return Alert.alert(
          'New Meal',
          'Please, fill all the fields in order to register a new meal',
        )
      }

      const newMeal = {
        id: generateRandomId(),
        name,
        description,
        time: getFormattedTime(date),
        date: getFormattedDate(date),
        isOnDiet,
      }

      console.log(newMeal.date)

      await addNewMeal(newMeal)
      navigation.navigate('feedback', { isOnDiet })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <ScreenHeader type="DEFAULT" title="New Meal" />
      <Form>
        <InputContainer>
          <LabelBase label="Name" />
          <InputBase type="DEFAULT" onChange={(value) => setName(value)} />
        </InputContainer>
        <InputContainer>
          <LabelBase label="Description" />
          <InputBase
            type="BIGGER"
            onChange={(value) => setDescription(value)}
          />
        </InputContainer>
        {!showDatePicker && (
          <InputContainer>
            <LabelBase label="Date" />
            <DateButton onPress={() => setShowDatePicker(true)}>
              <DateTextButton>
                {date
                  ? `${getFormattedDate(date)} - ${getFormattedTime(date)}`
                  : ''}
              </DateTextButton>
            </DateButton>
          </InputContainer>
        )}
        <DietButtonGroup onSelect={handleIsOnDiet} />
        <Button
          title="Register your Meal"
          hasIcon={false}
          onPress={() => {
            handleCreateNewMeal()
          }}
        />
      </Form>
      {showDatePicker && (
        <Modal visible={showDatePicker} transparent={true} animationType="fade">
          <DateTimePickerContainer>
            <DateTimePickerLabel>
              Select your meal&apos;s date and hour:
            </DateTimePickerLabel>
            <DateTimePicker
              mode="datetime"
              display="spinner"
              textColor="white"
              value={date}
              onChange={onChange}
            />
            <ConfirmDateBtn onPress={() => setShowDatePicker(false)}>
              <ConfirmDateText>Confirm Date</ConfirmDateText>
            </ConfirmDateBtn>
          </DateTimePickerContainer>
        </Modal>
      )}
    </Container>
  )
}
