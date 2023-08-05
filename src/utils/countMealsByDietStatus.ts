import { MealGroupProps } from '@storage/storageConfig'

export function countMealsByDietStatus(data: MealGroupProps[]) {
  let onDietCount = 0
  let offDietCount = 0
  let totalMeals = 0

  for (const item of data) {
    for (const meal of item.meals) {
      totalMeals++
      if (meal.isOnDiet) {
        onDietCount++
      } else {
        offDietCount++
      }
    }
  }

  const onDietPercentage = (onDietCount / totalMeals) * 100
  const offDietPercentage = (offDietCount / totalMeals) * 100

  return {
    onDietCount,
    offDietCount,
    onDietPercentage: onDietPercentage.toFixed(2),
    offDietPercentage: offDietPercentage.toFixed(2),
  }
}
