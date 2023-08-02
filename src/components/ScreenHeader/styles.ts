import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ChevronLeft from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from 'react-native'

export type ScreenHeaderTypeStyleProps = 'DEFAULT' | 'ONDIET' | 'OFFDIET'

type Props = {
  type: ScreenHeaderTypeStyleProps
}

export const Container = styled(SafeAreaView)<Props>`
  position: relative;
  flex-direction: row;
  padding: 20px;
  background-color: ${({ theme, type }) => {
    switch (type) {
      case 'DEFAULT':
        return theme.colors.gray_700
      case 'ONDIET':
        return theme.colors.green_700
      case 'OFFDIET':
        return theme.colors.red_700
      default:
        return theme.colors.gray_700
    }
  }};
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const Title = styled.Text`
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.md}px;
`

export const ButtonIcon = styled(TouchableOpacity)`
  left: 5%;
  top: 150%;
  position: absolute;
  margin-top: 5px;
  width: 32px;
  height: 32px;
`

export const Icon = styled(ChevronLeft)<Props>`
  font-size: 24px;
  color: ${({ theme, type }) => {
    switch (type) {
      case 'DEFAULT':
        return theme.colors.gray_100
      case 'ONDIET':
        return theme.colors.green_300
      case 'OFFDIET':
        return theme.colors.red_300
      default:
        return theme.colors.gray_100
    }
  }};
`
