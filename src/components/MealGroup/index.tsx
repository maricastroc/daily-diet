import { MealCard } from '@components/MealCard'
import { FlatList } from 'react-native'
import { MealTitle, MealsListContainer } from './styles'

type MealProps = {
  title: string
  hour: string
  onDiet: boolean
}

type MealsGroupProps = {
  date: string
  meals: MealProps[]
}

export function MealGroup({ meals, date }: MealsGroupProps) {
  return (
    <MealsListContainer>
      <MealTitle>{date}</MealTitle>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.title}
        renderItem={({ item }: { item: MealProps }) => (
          <MealCard title={item.title} hour={item.hour} onDiet={item.onDiet} />
        )}
        contentContainerStyle={{ gap: 12, marginTop: 12 }}
        showsVerticalScrollIndicator={false}
      />
    </MealsListContainer>
  )
}
