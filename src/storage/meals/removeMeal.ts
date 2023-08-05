/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEALS_COLLECTION, MealProps } from '@storage/storageConfig'

import { getAllMealGroups } from './getAllMealGroups'

export const removeMeal = async (newMeal: MealProps) => {
  try {
    const storedMealGroups = await getAllMealGroups()

    const newMealGroups = storedMealGroups.map((group) => {
      if (group.date === newMeal.date) {
        const newMeals = group.meals.filter((meal) => meal.id !== newMeal.id)

        return {
          date: group.date,
          meals: newMeals,
        }
      } else {
        return group
      }
    })

    const removeEmptyGroups = newMealGroups.filter(
      (group) => group.meals.length > 0,
    )

    await AsyncStorage.setItem(
      MEALS_COLLECTION,
      JSON.stringify(removeEmptyGroups),
    )
  } catch (error) {
    throw error
  }
}
