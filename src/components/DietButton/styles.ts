import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export type DietButtonTypeStyleProps = 'ONDIET' | 'OFFDIET'

type Props = {
  type: DietButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  border: solid 2px ${({ theme }) => theme.colors.gray_400};
  background-color: ${({ theme }) => theme.colors.gray_400};
`

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.sm}px;
`

export const Label = styled.View<Props>`
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  margin-right: 8px;
  background-color: ${({ theme, type }) =>
    type === 'ONDIET' ? theme.colors.green_500 : theme.colors.red_500};
`
