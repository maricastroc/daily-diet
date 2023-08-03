/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEALS_COLLECTION, MealProps } from '@storage/storageConfig'

import { getAllMealGroups } from './getAllMealGroups'

import { orderMealGroupsByDate } from '@utils/orderMealGroupsByDate'
import { orderMealsByHour } from '@utils/orderMealsByHour'

export const addNewMeal = async (meal: MealProps) => {
  try {
    const storedMealGroups = await getAllMealGroups()

    const groupAlreadyExists = storedMealGroups.filter(
      (group) => group.date === meal.date,
    )

    if (groupAlreadyExists.length > 0) {
      const newMealGroups = storedMealGroups.map((group) => {
        if (group.date === meal.date) {
          const mealGroupOrdered = orderMealsByHour([...group.meals, meal])

          return {
            date: group.date,
            meals: mealGroupOrdered,
          }
        } else {
          return group
        }
      })

      await AsyncStorage.setItem(
        MEALS_COLLECTION,
        JSON.stringify(newMealGroups),
      )
    } else {
      const newGroup = { date: meal.date, meals: [meal] }
      const newMealGroups = orderMealGroupsByDate([
        ...storedMealGroups,
        newGroup,
      ])

      await AsyncStorage.setItem(
        MEALS_COLLECTION,
        JSON.stringify(newMealGroups),
      )
    }
  } catch (error) {
    throw error
  }
}
