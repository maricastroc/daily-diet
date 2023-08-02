import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'
import Plus from 'react-native-vector-icons/Feather'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  flex-direction: row;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.colors.gray_500 : theme.colors.gray_700};

  border-radius: 6px;
  border-width: ${({ type }) => (type === 'PRIMARY' ? '2px' : '0')};
  border-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? 'transparent' : theme.colors.white};
  border-style: solid;

  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
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
