import { Alert, Modal, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'

import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker'

import {
  ButtonsContainer,
  ButtonsLabel,
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
import { InnerContainerForTwoItems } from '@components/InnerContainerForTwoItems'
import { ContainerForTwoItems } from '@components/ContainerForTwoItems'
import { ScreenHeader } from '@components/ScreenHeader'
import { DietButton } from '@components/DietButton'
import { Button } from '@components/Button'
import { LabelBase } from '@components/LabelBase'

import { getFormattedDate } from '@utils/getFormattedDate'
import { getFormattedTime } from '@utils/getFormattedTime'
import { generateRandomId } from '@utils/generateRandomID'

import { addNewMeal } from '@storage/meals/addNewMeal'

export function CreateMeal() {
  const [selectedType, setSelectedType] = useState('')

  const [showDatePicker, setShowDatePicker] = useState(false)

  const [date, setDate] = useState(new Date())

  const [mealName, setMealName] = useState('')

  const [mealDescription, setMealDescription] = useState('')

  const navigation = useNavigation()

  const handleSelectType = (type: string) => {
    setSelectedType(type)
  }

  function onChange(
    event: DateTimePickerEvent,
    selectedDate?: Date | undefined,
  ) {
    if (event.type === 'set' && selectedDate) {
      setDate(selectedDate)
    }
  }

  async function handleCreateNewMeal(
    mealName: string,
    mealDescription: string,
    selectedType: string,
  ) {
    try {
      if (mealName === '' || mealDescription === '' || selectedType === '') {
        return Alert.alert(
          'New Meal',
          'Please, fill all the fields in order to register a new meal',
        )
      }

      const newMeal = {
        id: generateRandomId(),
        name: mealName,
        description: mealDescription,
        time: getFormattedTime(date),
        date: getFormattedDate(date),
        isOnDiet: selectedType === 'ONDIET',
      }

      console.log(newMeal.date)

      await addNewMeal(newMeal)
      navigation.navigate('home')
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
          <InputBase type="DEFAULT" onChange={(value) => setMealName(value)} />
        </InputContainer>
        <InputContainer>
          <LabelBase label="Description" />
          <InputBase
            type="BIGGER"
            onChange={(value) => setMealDescription(value)}
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
        <ButtonsContainer>
          <ButtonsLabel>Is it on your diet?</ButtonsLabel>
          <ContainerForTwoItems>
            <InnerContainerForTwoItems>
              <DietButton
                type="ONDIET"
                onPress={() => handleSelectType('ONDIET')}
                isSelected={selectedType === 'ONDIET'}
              />
            </InnerContainerForTwoItems>
            <View style={{ marginLeft: 12, marginRight: 12 }} />
            <InnerContainerForTwoItems>
              <DietButton
                type="OFFDIET"
                onPress={() => handleSelectType('OFFDIET')}
                isSelected={selectedType === 'OFFDIET'}
              />
            </InnerContainerForTwoItems>
          </ContainerForTwoItems>
        </ButtonsContainer>
        <Button
          title="Register your Meal"
          hasIcon={false}
          onPress={() =>
            handleCreateNewMeal(mealName, mealDescription, selectedType)
          }
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
