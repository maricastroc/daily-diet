import {
  Container,
  Time,
  Label,
  Meal,
  MealContainer,
  Separator,
} from './styles'

type Props = {
  title: string
  time: string
  onDiet?: boolean
}

export function MealCard({ onDiet = true, title, time }: Props) {
  console.log(time)
  return (
    <Container>
      <Time>{time}</Time>
      <Separator />
      <MealContainer>
        <Meal>{title}</Meal>
        <Label onDiet={onDiet} />
      </MealContainer>
    </Container>
  )
}
