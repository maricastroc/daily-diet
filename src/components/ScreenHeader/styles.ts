import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ChevronLeft from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from 'react-native'

export const Container = styled(SafeAreaView)`
  position: relative;
  flex-direction: row;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.gray_700};
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

export const Icon = styled(ChevronLeft)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.gray_100};
`
