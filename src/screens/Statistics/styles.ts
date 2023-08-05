import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ChevronLeft from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from 'react-native'

export type StatisticsTypeStyleProps = 'ONDIET' | 'OFFDIET'

type Props = {
  type: StatisticsTypeStyleProps
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray_700};
`

export const HeaderContainer = styled(SafeAreaView)`
  position: relative;
  padding: 36px 20px;
  background-color: ${({ theme }) => theme.colors.gray_700};
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const Title = styled.Text<Props>`
  margin: 0 auto;
  color: ${({ theme, type }) =>
    type === 'ONDIET' ? theme.colors.green_500 : theme.colors.red_500};
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.xxl}px;
`

export const Paragraph = styled.Text<Props>`
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.gray_100};
  font-family: ${({ theme }) => theme.font_family.regular};
  font-size: ${({ theme }) => theme.font_size.md}px;
`

export const ButtonIcon = styled(TouchableOpacity)`
  left: 5%;
  top: 110%;
  position: absolute;
  margin-top: 5px;
  width: 32px;
  height: 32px;
`

export const Content = styled.View`
  flex: 1;
  gap: 24px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray_600};
  width: 100%;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  padding: 40px 24px 0;
  overflow: hidden;
`

export const Icon = styled(ChevronLeft)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.gray_100};
`

export const StatisticsContainer = styled.View`
  gap: 16px;
  flex-direction: column;
  width: 100%;
`

export const StatisticsText = styled.Text`
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.sm}px;
`

export const CardDefault = styled.View`
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray_400};
  width: 100%;
  border-radius: 8px;
  padding: 16px;
`

export const CardTitle = styled.Text`
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.xl}px;
`

export const CardParagraph = styled.Text`
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font_family.regular};
  font-size: ${({ theme }) => theme.font_size.sm}px;
`

export const CardOnDiet = styled.View`
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.green_700};
  border-radius: 8px;
  padding: 16px;
  width: 100%;
`

export const CardOffDiet = styled.View`
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.red_700};
  border-radius: 8px;
  padding: 16px;
  width: 100%;
`
