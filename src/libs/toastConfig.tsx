/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseToast, ErrorToast } from 'react-native-toast-message'

export const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{ backgroundColor: '#29292E' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
        color: '#00B37E',
      }}
    />
  ),
  error: (props: any) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17,
      }}
      text2Style={{
        fontSize: 15,
      }}
    />
  ),
}
