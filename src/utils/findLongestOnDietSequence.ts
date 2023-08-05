import { MealGroupProps, MealProps } from '@storage/storageConfig'

export function findLongestOnDietSequence(data: MealGroupProps[]) {
  let longestSequence: MealProps[] = []
  let currentSequence = []

  for (const item of data) {
    for (const meal of item.meals) {
      if (meal.isOnDiet) {
        currentSequence.push(meal)
      } else {
        if (currentSequence.length > longestSequence.length) {
          longestSequence = [...currentSequence]
        }
        currentSequence = []
      }
    }
  }

  if (currentSequence.length > longestSequence.length) {
    longestSequence = [...currentSequence]
  }

  return longestSequence
}
