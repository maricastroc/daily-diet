/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEALS_COLLECTION } from '@storage/storageConfig'
import { mealsGetAll } from './mealsGetAll'

export interface MealCreateProps {
  mealName: string
  mealDescription: string
  date: string
  hour: string
  onDiet: boolean
}

export async function mealCreate({
  mealName,
  mealDescription,
  date,
  hour,
  onDiet,
}: MealCreateProps) {
  try {
    const storedMeals = await mealsGetAll()

    const newMeal = {
      mealName,
      mealDescription,
      date,
      hour,
      onDiet,
    }

    const storage = JSON.stringify([...storedMeals, newMeal])
    await AsyncStorage.setItem(MEALS_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}
