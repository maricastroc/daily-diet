import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/Home'
import { ShowMeal } from '@screens/ShowMeal'
import { CreateMeal } from '@screens/CreateMeal'
import { EditMeal } from '@screens/EditMeal'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />

      <Screen name="createMeal" component={CreateMeal} />

      <Screen name="showMeal" component={ShowMeal} />

      <Screen name="editMeal" component={EditMeal} />
    </Navigator>
  )
}
