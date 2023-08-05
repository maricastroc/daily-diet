import { ScreenHeader } from '@components/ScreenHeader'
import Toast from 'react-native-toast-message'
import {
  ButtonsWrapper,
  Container,
  ContentWrapper,
  DetailsContainer,
  MajorHeading,
  MealDetailsContainer,
  MinorHeading,
  Paragraph,
  Tag,
  TagContainer,
  TagText,
} from './styles'
import { useRoute, useNavigation } from '@react-navigation/native'
import { MealProps } from '@storage/storageConfig'
import { Button } from '@components/Button'
import { ModalBase } from '@components/ModalBase'
import { useState } from 'react'
import { removeMeal } from '@storage/meals/removeMeal'

type RouteParams = {
  meal: MealProps
}

export function ShowMeal() {
  const route = useRoute()

  const { meal } = route.params as RouteParams

  const navigation = useNavigation()

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Remove Meal',
      text2: 'Meal successfully deleted!',
    })
  }

  const [showModal, setShowModal] = useState(false)

  function goToEditMealScreen(meal: MealProps) {
    navigation.navigate('editMeal', { meal })
  }

  async function handleRemoveMeal() {
    try {
      await removeMeal(meal)
      showToast()
      navigation.navigate('home')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <ModalBase
        isVisible={showModal}
        toggleModal={() => setShowModal(false)}
        onPress={handleRemoveMeal}
      />
      <ScreenHeader title="Meal" />
      <MealDetailsContainer>
        <ContentWrapper>
          <DetailsContainer>
            <MajorHeading>{meal.name}</MajorHeading>
            <Paragraph>{meal.description}</Paragraph>
          </DetailsContainer>
          <DetailsContainer>
            <MinorHeading>Date and time</MinorHeading>
            <Paragraph>
              {meal.date} at {meal.time}
            </Paragraph>
          </DetailsContainer>
          <TagContainer>
            <Tag type={meal.isOnDiet ? 'ONDIET' : 'OFFDIET'} />
            <TagText>{meal.isOnDiet ? 'On Diet' : 'Off Diet'}</TagText>
          </TagContainer>
        </ContentWrapper>
        <ButtonsWrapper>
          <Button
            title="Edit Meal"
            type="SECONDARY"
            hasIcon
            iconName="edit"
            onPress={() => goToEditMealScreen(meal)}
          />
          <Button
            title="Delete Meal"
            type="TERTIARY"
            hasIcon
            iconName="trash"
            onPress={() => setShowModal(true)}
          />
        </ButtonsWrapper>
      </MealDetailsContainer>
    </Container>
  )
}
