import styled from 'styled-components/native'
import { BaseToast } from 'react-native-toast-message'

export const StyledBaseToast = styled(BaseToast)`
  background-color: ${({ theme }) => theme.colors.gray_400};
`
