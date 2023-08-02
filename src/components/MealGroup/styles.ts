import styled from 'styled-components/native'

export const MealsListContainer = styled.View`
  flex-direction: column;
  margin-top: 46px;
`

export const MealTitle = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.font_family.bold};
  color: ${({ theme }) => theme.colors.white};
`
