import { ScreenHeader } from '@components/ScreenHeader'
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

type RouteParams = {
  meal: MealProps
}

export function ShowMeal() {
  const route = useRoute()
  const { meal } = route.params as RouteParams
  const navigation = useNavigation()

  function goToEditMealScreen(meal: MealProps) {
    navigation.navigate('editMeal', { meal })
  }

  return (
    <Container>
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
          />
        </ButtonsWrapper>
      </MealDetailsContainer>
    </Container>
  )
}
