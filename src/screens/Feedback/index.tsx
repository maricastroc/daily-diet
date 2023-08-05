import {
  ButtonContainer,
  ButtonText,
  Container,
  Heading,
  Icon,
  Paragraph,
  TextContainer,
} from './styles'
import { useRoute, useNavigation } from '@react-navigation/native'

interface RouteParams {
  isOnDiet: boolean
}

export function Feedback() {
  const route = useRoute()
  const navigation = useNavigation()

  const { isOnDiet } = route.params as RouteParams

  function handleGoHome() {
    navigation.navigate('home')
  }

  return (
    <Container>
      <TextContainer>
        <Icon
          name={isOnDiet ? 'rocket' : 'x-circle'}
          type={isOnDiet ? 'ONDIET' : 'OFFDIET'}
        />
        <Heading type={isOnDiet ? 'ONDIET' : 'OFFDIET'}>
          {isOnDiet ? 'Keep it up!' : 'What a pity...'}
        </Heading>
        <Paragraph>
          {isOnDiet
            ? 'You are still sticking to the diet. Well done!'
            : "You went off the diet this time, but keep putting in effort and don't give up!"}
        </Paragraph>
      </TextContainer>
      <ButtonContainer onPress={handleGoHome}>
        <ButtonText>Go To Home</ButtonText>
      </ButtonContainer>
    </Container>
  )
}
