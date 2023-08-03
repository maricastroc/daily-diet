/* eslint-disable spaced-comment */
/* eslint-disable no-lone-blocks */
import { ScreenHeader } from '@components/ScreenHeader'
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
import { InnerContainerForTwoItems } from '@components/InnerContainerForTwoItems'
import { ContainerForTwoItems } from '@components/ContainerForTwoItems'
import { Alert, Modal, View } from 'react-native'
import { DietButton } from '@components/DietButton'
import { Button } from '@components/Button'
import { useState } from 'react'
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker'
import { getFormattedDate } from '@utils/getFormattedDate'
import { LabelBase } from '@components/LabelBase'
import { getFormattedTime } from '@utils/getFormattedTime'
import { useNavigation, useRoute } from '@react-navigation/native'
import { addNewMeal } from '@storage/meals/addNewMeal'
import { generateRandomId } from '@utils/generateRandomID'
import { MealProps } from '@storage/storageConfig'
import { formatStringToDate } from '@utils/formatStringToDate'
import { InputBase } from '@components/InputBase'

type RouteParams = {
  meal: MealProps
}

export function EditMeal() {
  const route = useRoute()

  const { meal } = route.params as RouteParams

  const [selectedType, setSelectedType] = useState(
    meal.isOnDiet ? 'ONDIET' : 'OFFDIET',
  )

  const [showDatePicker, setShowDatePicker] = useState(false)

  const [date, setDate] = useState<Date>(
    formatStringToDate(meal.date, meal.time),
  )

  const [name, setName] = useState(meal.name)

  const [description, setDescription] = useState(meal.description)

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

  async function handleEditMeal() {
    try {
      if (name === '' || description === '' || selectedType === '') {
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
        isOnDiet: selectedType === 'ONDIET',
      }

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
          onPress={() => handleEditMeal()}
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
