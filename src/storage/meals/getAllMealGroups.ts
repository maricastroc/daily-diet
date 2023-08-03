/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEALS_COLLECTION, MealGroupProps } from '@storage/storageConfig'

export const getAllMealGroups = async () => {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION)

    const mealGroups: MealGroupProps[] = storage ? JSON.parse(storage) : []

    return mealGroups
  } catch (error) {
    throw error
  }
}
