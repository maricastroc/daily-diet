import { StatisticCard } from '@components/StatisticCard'
import { Container, MealsLabel, MealsTitle } from './styles'
import { HomeHeader } from '@components/HomeHeader'
import { Button } from '@components/Button'
import { MealGroup } from '@components/MealGroup'
import { useNavigation } from '@react-navigation/native'

const allMeals = [
  {
    title: 'X-tudo',
    hour: '08:00pm',
    onDiet: false,
  },
  {
    title: 'Whey protein com leite',
    hour: '04:00pm',
    onDiet: true,
  },
  {
    title: 'Salada cesar com frango grelhadoooo e legumes',
    hour: '12:30pm',
    onDiet: true,
  },
  {
    title: 'Vitamina de banana com abacate',
    hour: '09:30am',
    onDiet: true,
  },
]

export function Home() {
  const navigation = useNavigation()

  function goToNewMealScreen() {
    navigation.navigate('newMeal')
  }

  return (
    <Container>
      <HomeHeader />
      <StatisticCard />
      <MealsLabel>
        <MealsTitle>Meals</MealsTitle>
        <Button title="New Meal" hasIcon={true} onPress={goToNewMealScreen} />
      </MealsLabel>
      <MealGroup meals={allMeals} date="12.08.2023" />
    </Container>
  )
}
