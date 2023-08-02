import { ScreenHeader } from '@components/ScreenHeader'
import { ButtonsContainer, ButtonsLabel, Container, Form } from './styles'
import { InputBase } from '@components/InputBase'
import { InnerContainerForTwoItems } from '@components/InnerContainerForTwoItems'
import { ContainerForTwoItems } from '@components/ContainerForTwoItems'
import { Pressable, TextInput, View } from 'react-native'
import { DietButton } from '@components/DietButton'
import { Button } from '@components/Button'
import { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import { getFormattedDate } from '@utils/getFormattedDate'

export function NewMeal() {
  const [selectedType, setSelectedType] = useState('')
  const [selectedDate, setSelectedDate] = useState(null)
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [date, setDate] = useState(new Date())

  const handleSelectType = (type: string) => {
    setSelectedType(type)
  }

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker)
  }

  console.log(showDatePicker)

  function onChange(event: Event, selectedDate?: Date | undefined) {
    if (event.type === 'set' && selectedDate) {
      const localDate = new Date(
        selectedDate.getTime() + selectedDate.getTimezoneOffset() * 60000,
      )
      setDate(localDate)
    } else {
      setShowDatePicker(!showDatePicker)
    }
  }

  console.log(getFormattedDate(date))

  return (
    <Container>
      <ScreenHeader type="DEFAULT" title="New Meal" />
      <Form>
        <InputBase label="Name" type="DEFAULT" />
        <InputBase label="Description" type="BIGGER" />
        {showDatePicker && (
          <DateTimePicker
            mode="date"
            display="spinner"
            textColor="white"
            value={date}
            onChange={onChange}
          />
        )}
        {!showDatePicker && (
          <Pressable onPressIn={() => setShowDatePicker(true)}>
            <TextInput
              onFocus={() => setShowDatePicker(true)}
              value={getFormattedDate(date)}
            />
          </Pressable>
        )}
        <ContainerForTwoItems>
          <InnerContainerForTwoItems>
            <Pressable onPress={toggleDatePicker}>
              <InputBase label="Date" type="DEFAULT" />
            </Pressable>
          </InnerContainerForTwoItems>
          <View style={{ marginLeft: 12, marginRight: 12 }} />
          <InnerContainerForTwoItems>
            <InputBase label="Hour" type="DEFAULT" />
          </InnerContainerForTwoItems>
        </ContainerForTwoItems>
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
        <Button title="Register your Meal" hasIcon={false} />
      </Form>
    </Container>
  )
}
