import { getAllMealGroups } from '@storage/meals/getAllMealGroups'
import { useState, useCallback } from 'react'
import { Alert, View } from 'react-native'
import { findLongestOnDietSequence } from '@utils/findLongestOnDietSequence'
import {
  ButtonIcon,
  CardDefault,
  CardOffDiet,
  CardOnDiet,
  CardParagraph,
  CardTitle,
  Container,
  Content,
  HeaderContainer,
  Icon,
  Paragraph,
  StatisticsContainer,
  StatisticsText,
  Title,
} from './styles'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { countMealsByDietStatus } from '@utils/countMealsByDietStatus'
import { ContainerForTwoItems } from '@components/ContainerForTwoItems'
import { InnerContainerForTwoItems } from '@components/InnerContainerForTwoItems'

export function Statistics() {
  const [longestOnDietSequence, setLongestOnDietSequence] = useState(0)

  const [onDietPercentage, setOnDietPercentage] = useState('')

  const [onDietCount, setOnDietCount] = useState(0)

  const [offDietCount, setOffDietCount] = useState(0)

  const navigation = useNavigation()

  function goBack() {
    navigation.navigate('home')
  }

  const fetchMealGroups = async () => {
    try {
      const data = await getAllMealGroups()

      const { onDietCount, offDietCount, onDietPercentage } =
        countMealsByDietStatus(data)

      setLongestOnDietSequence(findLongestOnDietSequence(data).length)

      setOnDietCount(onDietCount)
      setOffDietCount(offDietCount)
      setOnDietPercentage(onDietPercentage)
    } catch (error) {
      Alert.alert('Meals', 'Unable to load meals!')
      console.log(error)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMealGroups()
    }, []),
  )

  return (
    <Container>
      <HeaderContainer>
        <ButtonIcon onPress={goBack}>
          <Icon name="chevron-left" />
        </ButtonIcon>
        <Title type={onDietCount > offDietCount ? 'ONDIET' : 'OFFDIET'}>
          {`${onDietPercentage}%`}
        </Title>
        <Paragraph type={onDietCount > offDietCount ? 'ONDIET' : 'OFFDIET'}>
          of meals on diet
        </Paragraph>
      </HeaderContainer>
      <Content>
        <StatisticsText>General Statistics</StatisticsText>
        <StatisticsContainer>
          <CardDefault>
            <CardTitle>{longestOnDietSequence}</CardTitle>
            <CardParagraph>
              longest sequence of meals within the diet
            </CardParagraph>
          </CardDefault>
          <CardDefault>
            <CardTitle>{onDietCount + offDietCount}</CardTitle>
            <CardParagraph>registered meals</CardParagraph>
          </CardDefault>
          <ContainerForTwoItems>
            <InnerContainerForTwoItems>
              <CardOnDiet>
                <CardTitle>{onDietCount}</CardTitle>
                <CardParagraph>meals on diet</CardParagraph>
              </CardOnDiet>
            </InnerContainerForTwoItems>
            <View style={{ marginLeft: 6, marginRight: 6 }} />
            <InnerContainerForTwoItems>
              <CardOffDiet>
                <CardTitle>{offDietCount}</CardTitle>
                <CardParagraph>meals off diet</CardParagraph>
              </CardOffDiet>
            </InnerContainerForTwoItems>
          </ContainerForTwoItems>
        </StatisticsContainer>
      </Content>
    </Container>
  )
}
