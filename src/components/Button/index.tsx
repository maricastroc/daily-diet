import { TouchableOpacityProps } from 'react-native'
import { ButtonTypeStyleProps, Container, Icon, Title } from './styles'

type Props = TouchableOpacityProps & {
  title: string
  type?: ButtonTypeStyleProps
  hasIcon?: boolean
}

export function Button({
  title,
  type = 'PRIMARY',
  hasIcon = false,
  ...rest
}: Props) {
  return (
    <Container type={type} {...rest}>
      {hasIcon && <Icon name="plus" />}
      <Title>{title}</Title>
    </Container>
  )
}
