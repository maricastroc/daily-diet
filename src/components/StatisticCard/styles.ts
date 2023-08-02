import styled from 'styled-components/native'
import ArrowUpRight from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from 'react-native'

export const Container = styled.View`
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 28px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.green_700};
`

export const TextContainer = styled.View`
  justify-content: center;
  align-items: center;
`

export const Heading = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.xxl}px;
`

export const Paragraph = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font_family.regular};
  font-size: ${({ theme }) => theme.font_size.sm}px;
`

export const ButtonIcon = styled(TouchableOpacity)`
  position: absolute;
  top: 14%;
  left: 105%;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
`

export const Icon = styled(ArrowUpRight)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.green_300};
`
