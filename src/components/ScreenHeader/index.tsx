import {
  ButtonIcon,
  Container,
  Icon,
  ScreenHeaderTypeStyleProps,
  Title,
} from './styles'
import { useNavigation } from '@react-navigation/native'

type Props = {
  type?: ScreenHeaderTypeStyleProps
  title: string
}

export function ScreenHeader({ type = 'DEFAULT', title }: Props) {
  const navigation = useNavigation()

  function goBack() {
    navigation.navigate('home')
  }

  return (
    <Container type={type}>
      <ButtonIcon onPress={goBack}>
        <Icon name="chevron-left" type={type} />
      </ButtonIcon>
      <Title>{title}</Title>
    </Container>
  )
}
