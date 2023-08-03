const MEALS_COLLECTION = '@daily-diet:meals'

type MealProps = {
  name: string
  description: string
  date: string
  time: string
  id: string | number[]
  isOnDiet: boolean
}

type MealGroupProps = {
  date: string
  meals: MealProps[]
}

export { MEALS_COLLECTION, MealProps, MealGroupProps }
