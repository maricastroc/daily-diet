import { TouchableOpacityProps } from 'react-native'
import { ButtonModalTypeStyleProps, Container, Title } from './styles'

type Props = TouchableOpacityProps & {
  type?: ButtonModalTypeStyleProps
  title: string
}

export const ButtonModal = ({ type = 'PRIMARY', title, ...rest }: Props) => {
  return (
    <Container {...rest} type={type}>
      <Title>{title}</Title>
    </Container>
  )
}
