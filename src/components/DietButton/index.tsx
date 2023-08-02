import { TouchableOpacityProps } from 'react-native'
import { DietButtonTypeStyleProps, Container, Label, Text } from './styles'
import { useTheme } from 'styled-components'

type Props = TouchableOpacityProps & {
  type?: DietButtonTypeStyleProps
  isSelected: boolean
}

export function DietButton({ type = 'ONDIET', isSelected, ...rest }: Props) {
  const theme = useTheme()
  return (
    <Container
      {...rest}
      style={{
        borderColor: isSelected
          ? type === 'ONDIET'
            ? theme.colors.green_500
            : theme.colors.red_500
          : theme.colors.gray_400,
      }}
    >
      <Label type={type} />
      <Text>{type === 'ONDIET' ? 'Yes' : 'No'}</Text>
    </Container>
  )
}
