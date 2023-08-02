import { Text } from 'react-native'
import styled from 'styled-components/native'

type Props = {
  onDiet: boolean
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray_400};
  padding: 14px;
  border-radius: 8px;
`

export const Hour = styled.Text`
  font-size: ${({ theme }) => theme.font_size.xs}px;
  font-family: ${({ theme }) => theme.font_family.bold};
  color: ${({ theme }) => theme.colors.white};
`

export const Separator = styled.View`
  width: 1px;
  background-color: ${({ theme }) => theme.colors.gray_300};
  height: 14px;
  margin: 0 12px;
`

export const MealContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`

export const Meal = styled(Text).attrs({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
})`
  font-size: ${({ theme }) => theme.font_size.md}px;
  font-family: ${({ theme }) => theme.font_family.regular};
  color: ${({ theme }) => theme.colors.gray_100};
  flex: 1;
  padding-right: 10px;
`

export const Label = styled.View<Props>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ theme, onDiet }) =>
    onDiet ? theme.colors.green_500 : theme.colors.red_500};
`
