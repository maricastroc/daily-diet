import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'
import { css } from 'styled-components'
import IconBase from 'react-native-vector-icons/Octicons'

export type FeedbackTypeStyleProps = 'ONDIET' | 'OFFDIET'

type Props = {
  type: FeedbackTypeStyleProps
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray_700};
  width: 100%;
`

export const TextContainer = styled.View`
  gap: 8px;
  margin: 0 28px;
`

export const Heading = styled.Text<Props>`
  color: ${({ theme, type }) =>
    type === 'ONDIET' ? theme.colors.green_500 : theme.colors.red_500};
  font-size: 20px;
  font-family: ${({ theme }) => theme.font_family.bold};
  text-align: center;
`

export const Paragraph = styled.Text`
  text-align: center;
  margin-bottom: 40px;
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.sm}px;
  `};
`

export const Icon = styled(IconBase)<Props>`
  margin: 0 auto 12px;
  font-size: 44px;
  color: ${({ theme, type }) =>
    type === 'ONDIET' ? theme.colors.green_700 : theme.colors.red_500};
`

export const ButtonContainer = styled(TouchableOpacity)`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.gray_500};
  border: none;
  padding: 16px 24px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`

export const ButtonText = styled.Text`
  margin-top: 2px;
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.sm}px;
  `};
`
