import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  flex: 1;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray_700};
  width: 100%;
`

export const Form = styled.View`
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

export const InputContainer = styled.View`
  gap: 8px;
  width: 100%;
`

export const ButtonsContainer = styled.View`
  margin-top: 12px;
  gap: 12px;
  margin-bottom: 24px;
`

export const ButtonsLabel = styled.Text`
  font-size: ${({ theme }) => theme.font_size.sm}px;
  font-family: ${({ theme }) => theme.font_family.bold};
  color: ${({ theme }) => theme.colors.white};
`

export const DateTimePickerContainer = styled.View`
  flex-direction: column;
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray_700};
  padding: 0 24px;
`

export const DateTimePickerLabel = styled.Text`
  font-size: ${({ theme }) => theme.font_size.sm}px;
  font-family: ${({ theme }) => theme.font_family.bold};
  color: ${({ theme }) => theme.colors.white};
`

export const ConfirmDateBtn = styled.TouchableOpacity`
  flex-direction: row;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  border: none;
  background-color: ${({ theme }) => theme.colors.green_700};
`

export const ConfirmDateText = styled.Text`
  font-size: ${({ theme }) => theme.font_size.sm}px;
  font-family: ${({ theme }) => theme.font_family.bold};
  color: ${({ theme }) => theme.colors.white};
`

export const DateButton = styled.TouchableOpacity`
  height: 48px;
  background-color: ${({ theme }) => theme.colors.gray_400};
  color: ${({ theme }) => theme.colors.gray_100};
  font-size: ${({ theme }) => theme.font_size.sm}px;
  font-family: ${({ theme }) => theme.font_family.regular};
  padding: 12px;
  border: solid 1px ${({ theme }) => theme.colors.gray_500};
  border-radius: 8px;
  width: 100%;
`

export const DateTextButton = styled.Text`
  color: ${({ theme }) => theme.colors.gray_100};
  font-size: ${({ theme }) => theme.font_size.sm}px;
  font-family: ${({ theme }) => theme.font_family.regular};
`
