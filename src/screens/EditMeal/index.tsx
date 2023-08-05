/* eslint-disable spaced-comment */
/* eslint-disable no-lone-blocks */
import { ScreenHeader } from '@components/ScreenHeader'
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
import { Alert, Modal } from 'react-native'
import { Button } from '@components/Button'
import { useState } from 'react'
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker'
import { getFormattedDate } from '@utils/getFormattedDate'
import { LabelBase } from '@components/LabelBase'
import { getFormattedTime } from '@utils/getFormattedTime'
import { useNavigation, useRoute } from '@react-navigation/native'
import { generateRandomId } from '@utils/generateRandomID'
import { MealProps } from '@storage/storageConfig'
import { formatStringToDate } from '@utils/formatStringToDate'
import { InputBase } from '@components/InputBase'
import { DietButtonGroup } from '@components/DietButtonGroup'
import { editMeal } from '@storage/meals/editMeal'
import Toast from 'react-native-toast-message'

type RouteParams = {
  meal: MealProps
}

export function EditMeal() {
  const route = useRoute()

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Edit Meal',
      text2: 'Meal successfully edited!',
    })
  }

  const { meal } = route.params as RouteParams

  const [isOnDiet, setIsOnDiet] = useState<boolean | null>(meal.isOnDiet)

  const [showDatePicker, setShowDatePicker] = useState(false)

  const [date, setDate] = useState<Date>(
    formatStringToDate(meal.date, meal.time),
  )

  const [name, setName] = useState(meal.name)

  const [description, setDescription] = useState(meal.description)

  const navigation = useNavigation()

  function handleIsOnDiet(value: boolean) {
    setIsOnDiet(value)
  }

  function onChange(
    event: DateTimePickerEvent,
    selectedDate?: Date | undefined,
  ) {
    if (event.type === 'set' && selectedDate) {
      setDate(selectedDate)
    }
  }

  async function handleEditMeal() {
    try {
      if (name === '' || description === '' || isOnDiet === null) {
        return Alert.alert(
          'New Meal',
          'Please, fill all the fields in order to edit this meal.',
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

      await editMeal(meal, newMeal)
      navigation.navigate('home')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <ScreenHeader title="Edit Meal" />
      <Form>
        <InputContainer>
          <LabelBase label="Name" />
          <InputBase onChange={setName} value={name} />
        </InputContainer>
        <InputContainer>
          <LabelBase label="Description" />
          <InputBase
            onChange={setDescription}
            value={description}
            type="BIGGER"
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
        <DietButtonGroup
          onSelect={handleIsOnDiet}
          initialValue={meal.isOnDiet}
        />
        <Button
          title="Save Changes"
          hasIcon={false}
          onPress={() => {
            showToast()
            handleEditMeal()
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
