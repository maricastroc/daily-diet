import { useTheme } from 'styled-components'
import { Container, InputText, InputTypeStyleProps } from './styles'
import { useState } from 'react'
import { TextInputProps } from 'react-native'

type Props = TextInputProps & {
  type?: InputTypeStyleProps
  value?: string
}

export function InputBase({ type = 'DEFAULT', value = '', ...rest }: Props) {
  const [isFocused, setIsFocused] = useState(false)
  const theme = useTheme()

  const handleInputFocus = () => {
    setIsFocused(true)
  }

  const handleInputBlur = () => {
    setIsFocused(false)
  }

  return (
    <Container type={type}>
      <InputText
        style={{
          borderColor: isFocused
            ? theme.colors.green_500
            : theme.colors.gray_500,
        }}
        onFocus={() => {
          handleInputFocus()
        }}
        placeholderTextColor={theme.colors.gray_300}
        onBlur={handleInputBlur}
        defaultValue={value !== '' ? value : ''}
        {...rest}
      />
    </Container>
  )
}
