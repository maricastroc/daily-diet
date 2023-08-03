import { StatisticCard } from '@components/StatisticCard'
import { Container, MealGroupTitle, MealsLabel, MealsTitle } from './styles'
import { HomeHeader } from '@components/HomeHeader'
import { Button } from '@components/Button'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { useCallback, useState } from 'react'
import { getAllMealGroups } from '@storage/meals/getAllMealGroups'
import { Alert, FlatList, View } from 'react-native'
import { MealGroupProps, MealProps } from '@storage/storageConfig'
import { Loading } from '@components/Loading'
import { MealCard } from '@components/MealCard'

export function Home() {
  const navigation = useNavigation()

  const [mealGroups, setMealGroups] = useState<MealGroupProps[] | undefined>([])

  const [isLoading, setIsLoading] = useState(false)

  function goToNewMealScreen() {
    navigation.navigate('createMeal')
  }

  function goToNewMealDetailsScreen(meal: MealProps) {
    navigation.navigate('showMeal', { meal })
  }

  const fetchMealGroups = async () => {
    try {
      setIsLoading(true)
      const data = await getAllMealGroups()

      setMealGroups(data)
    } catch (error) {
      Alert.alert('Meals', 'Não foi possível carregar as refeições!')
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMealGroups()
    }, []),
  )

  return (
    <Container>
      <HomeHeader />
      <StatisticCard />
      <MealsLabel>
        <MealsTitle>Meals</MealsTitle>
        <Button title="New Meal" hasIcon={true} onPress={goToNewMealScreen} />
      </MealsLabel>
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={mealGroups}
          keyExtractor={(group) => group.date}
          renderItem={(group) => (
            <>
              <MealGroupTitle>{group.item.date}</MealGroupTitle>
              <FlatList
                data={group.item.meals}
                keyExtractor={(meal) => meal.id.toString()}
                contentContainerStyle={{ paddingBottom: 40 }}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                renderItem={(meal) => (
                  <MealCard
                    onDiet={meal.item.isOnDiet}
                    time={meal.item.time}
                    title={meal.item.name}
                    onPress={() => goToNewMealDetailsScreen(meal.item)}
                  />
                )}
                showsVerticalScrollIndicator={false}
              />
            </>
          )}
        />
      )}
    </Container>
  )
}
