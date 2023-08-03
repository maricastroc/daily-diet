import { TouchableOpacityProps } from 'react-native'
import { ButtonTypeStyleProps, Container, Icon, Title } from './styles'

type Props = TouchableOpacityProps & {
  title: string
  type?: ButtonTypeStyleProps
  hasIcon?: boolean
  iconName?: string
}

export function Button({
  title,
  type = 'PRIMARY',
  hasIcon = false,
  iconName = 'plus',
  ...rest
}: Props) {
  return (
    <Container type={type} {...rest}>
      {hasIcon && <Icon name={iconName} />}
      <Title>{title}</Title>
    </Container>
  )
}
