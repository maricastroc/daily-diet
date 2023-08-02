import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 0 24px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray_700};
`

export const MealsLabel = styled.View`
  margin: 40px 0;
  width: 100%;
  gap: 8px;
`

export const MealsTitle = styled.Text`
  font-size: ${({ theme }) => theme.font_size.md}px;
  font-family: ${({ theme }) => theme.font_family.regular};
  color: ${({ theme }) => theme.colors.white};
`

export const MealsListContainer = styled.FlatList`
  flex-direction: column;
`

export const MealTitle = styled.Text`
  font-size: ${({ theme }) => theme.font_size.xl}px;
  font-family: ${({ theme }) => theme.font_family.bold};
  color: ${({ theme }) => theme.colors.white};
`
