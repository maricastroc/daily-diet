import { useTheme } from 'styled-components'
import { Container, InputText, InputTypeStyleProps } from './styles'
import { useState } from 'react'

type Props = {
  type?: InputTypeStyleProps
  onChange: (value: string) => void
  value?: string
}

export function InputBase({ type = 'DEFAULT', onChange, value = '' }: Props) {
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
        type={type}
        style={{
          borderColor: isFocused
            ? theme.colors.green_500
            : theme.colors.gray_500,
        }}
        onFocus={() => {
          handleInputFocus()
        }}
        onBlur={handleInputBlur}
        onChangeText={onChange}
        value={value !== '' ? value : ''}
      />
    </Container>
  )
}
