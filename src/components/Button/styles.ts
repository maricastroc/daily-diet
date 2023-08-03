import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'
import Plus from 'react-native-vector-icons/Feather'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY' | 'TERTIARY'

type Props = {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  flex-direction: row;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme, type }) => {
    if (type === 'TERTIARY') {
      return theme.colors.red_700
    } else if (type === 'SECONDARY') {
      return theme.colors.green_700
    } else {
      return theme.colors.gray_500
    }
  }};

  border-radius: 6px;
  border-width: ${({ type }) => (type === 'PRIMARY' ? '2px' : '0')};
  border-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? 'transparent' : theme.colors.white};
  border-style: solid;

  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  margin-top: 2px;
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.sm}px;
  `};
`

export const Icon = styled(Plus)`
  font-size: 18px;
  margin-right: 12px;
  color: ${({ theme }) => theme.colors.white};
`
