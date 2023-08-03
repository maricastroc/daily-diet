import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export type MealDetailsTypeStyleProps = 'ONDIET' | 'OFFDIET'

type Props = {
  type: MealDetailsTypeStyleProps
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray_700};
  width: 100%;
`

export const MealDetailsContainer = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray_600};
  width: 100%;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  padding: 40px 24px 150px;
  justify-content: space-between;
  overflow: hidden;
`

export const ContentWrapper = styled.View`
  width: 100%;
  gap: 24px;
`

export const DetailsContainer = styled.View`
  gap: 8px;
  width: 100%;
`

export const MajorHeading = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.font_family.bold};
  color: ${({ theme }) => theme.colors.white};
`

export const MinorHeading = styled.Text`
  margin-top: 8px;
  font-size: ${({ theme }) => theme.font_size.sm}px;
  font-family: ${({ theme }) => theme.font_family.bold};
  color: ${({ theme }) => theme.colors.white};
`

export const Paragraph = styled.Text`
  font-size: ${({ theme }) => theme.font_size.md}px;
  font-family: ${({ theme }) => theme.font_family.regular};
  color: ${({ theme }) => theme.colors.white};
`

export const TagContainer = styled.View`
  margin-top: 16px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.gray_400};
  padding: 12px;
  border-radius: 8px;
  width: 120px;
  gap: 8px;
  align-items: center;
`

export const TagText = styled.Text`
  font-size: ${({ theme }) => theme.font_size.sm}px;
  font-family: ${({ theme }) => theme.font_family.regular};
  color: ${({ theme }) => theme.colors.white};
`

export const Tag = styled.View<Props>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ theme, type }) =>
    type === 'ONDIET' ? theme.colors.green_500 : theme.colors.red_500};
`

export const ButtonsWrapper = styled.View`
  width: 100%;
  gap: 12px;
`
