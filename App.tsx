/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
import { ThemeProvider } from 'styled-components/native'
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito'
import theme from './src/theme/index'
import { Loading } from '@components/Loading'
import { StatusBar } from 'react-native'
import { Routes } from './src/routes/index'
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message'

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold })

  const toastConfig = {
    success: (props: any) => (
      <BaseToast
        {...props}
        style={{ backgroundColor: '#29292E' }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 13,
          fontWeight: 'bold',
          color: '#00B37E',
        }}
        text2Style={{
          fontSize: 11,
          fontWeight: 'bold',
          color: '#C4C4CC',
        }}
      />
    ),
    error: (props: any) => (
      <ErrorToast
        {...props}
        style={{ backgroundColor: '#29292E' }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 13,
          fontWeight: 'bold',
          color: '#E24053',
        }}
        text2Style={{
          fontSize: 11,
          fontWeight: 'bold',
          color: '#C4C4CC',
        }}
      />
    ),
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <Routes /> : <Loading />}
      </ThemeProvider>
      <Toast
        visibilityTime={4000}
        position="bottom"
        bottomOffset={20}
        autoHide
        config={toastConfig}
      />
    </>
  )
}
