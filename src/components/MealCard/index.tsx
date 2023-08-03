import { TouchableOpacityProps } from 'react-native'
import {
  Container,
  Time,
  Label,
  Meal,
  MealContainer,
  Separator,
} from './styles'

type Props = TouchableOpacityProps & {
  title: string
  time: string
  onDiet?: boolean
}

export function MealCard({ onDiet = true, title, time, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Time>{time}</Time>
      <Separator />
      <MealContainer>
        <Meal>{title}</Meal>
        <Label onDiet={onDiet} />
      </MealContainer>
    </Container>
  )
}
