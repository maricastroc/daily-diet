import { useTheme } from 'styled-components'
import { Container, InputText, InputTypeStyleProps, Label } from './styles'
import { useState } from 'react'

type Props = {
  label: string
  type?: InputTypeStyleProps
}

export function InputBase({ type = 'DEFAULT', label }: Props) {
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
      <Label>{label}</Label>
      <InputText
        type={type}
        style={{
          borderColor: isFocused
            ? theme.colors.green_500
            : theme.colors.gray_500,
        }}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </Container>
  )
}
