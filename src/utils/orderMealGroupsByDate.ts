import { MealGroupProps } from '@storage/storageConfig'
import { formatDate } from '../utils/formatDate'

export const orderMealGroupsByDate = (mealGroups: MealGroupProps[]) => {
  const orderedGroups = mealGroups.sort((a, b) => {
    return formatDate(b.date) - formatDate(a.date)
  })

  return orderedGroups
}
