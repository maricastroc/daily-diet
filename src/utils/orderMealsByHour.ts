import { MealProps } from '@storage/storageConfig'

export const orderMealsByHour = (meals: MealProps[]) => {
  const orderedMeals = meals.sort((a, b) => {
    const aTimeFormatted = parseInt(a.time.replace(':', ''))
    const bTimeFormatted = parseInt(b.time.replace(':', ''))

    if (aTimeFormatted < bTimeFormatted) {
      return 1
    } else if (aTimeFormatted === bTimeFormatted) {
      return 0
    } else {
      return -1
    }
  })

  return orderedMeals
}
