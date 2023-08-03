export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      createMeal: undefined
      showMeal: {
        meal: {
          name: string
          description: string
          date: string
          time: string
          id: string | number[]
          isOnDiet: boolean
        }
      }
      editMeal: {
        meal: {
          name: string
          description: string
          date: string
          time: string
          id: string | number[]
          isOnDiet: boolean
        }
      }
    }
  }
}
