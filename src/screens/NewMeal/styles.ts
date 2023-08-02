import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { Text } from 'react-native'

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

export const StyledDateTimePicker = styled(DateTimePickerModal)`
  color: red;
`

export const StyledDatePickerText = styled(Text)`
  color: red;
`

export const StyledMonthText = styled(Text)`
  color: blue;
`
