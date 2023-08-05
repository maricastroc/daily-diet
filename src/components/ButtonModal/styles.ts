import { Text, TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type ButtonModalTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: ButtonModalTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 45%;
  height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.colors.green_700 : theme.colors.gray_400};
  margin-top: 10px;
  border-radius: 6px;
`

export const Title = styled(Text)`
  ${({ theme }) => css`
    font-size: ${theme.font_size.sm}px;
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.white};
  `}
`
