/* eslint-disable no-useless-catch */
import { MealProps } from '@storage/storageConfig'

import { removeMeal } from './removeMeal'
import { addNewMeal } from './addNewMeal'

export const editMeal = async (meal: MealProps, newMeal: MealProps) => {
  try {
    await removeMeal(meal)
    await addNewMeal(newMeal)
  } catch (error) {
    throw error
  }
}
