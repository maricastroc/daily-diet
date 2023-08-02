/* eslint-disable camelcase */
import { ThemeProvider } from 'styled-components'
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito'
import theme from './src/theme/index'
import { Loading } from '@components/Loading'
import { StatusBar } from 'react-native'
import { Routes } from './src/routes/index'

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  )
}
