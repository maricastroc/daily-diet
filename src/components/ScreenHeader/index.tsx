import { ButtonIcon, Container, Icon, Title } from './styles'
import { useNavigation } from '@react-navigation/native'

type Props = {
  title: string
}

export function ScreenHeader({ title }: Props) {
  const navigation = useNavigation()

  function goBack() {
    navigation.navigate('home')
  }

  return (
    <Container>
      <ButtonIcon onPress={goBack}>
        <Icon name="chevron-left" />
      </ButtonIcon>
      <Title>{title}</Title>
    </Container>
  )
}
