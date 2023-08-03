import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEALS_COLLECTION } from '@storage/storageConfig'

export async function mealsGetAll() {
  const storage = await AsyncStorage.getItem(MEALS_COLLECTION)

  const meals: string[] = storage ? JSON.parse(storage) : []

  return meals
}
