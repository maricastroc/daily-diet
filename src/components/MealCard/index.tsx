import {
  Container,
  Hour,
  Label,
  Meal,
  MealContainer,
  Separator,
} from './styles'

type Props = {
  title: string
  hour: string
  onDiet?: boolean
}

export function MealCard({ onDiet = true, title, hour }: Props) {
  return (
    <Container>
      <Hour>{hour}</Hour>
      <Separator />
      <MealContainer>
        <Meal>{title}</Meal>
        <Label onDiet={onDiet} />
      </MealContainer>
    </Container>
  )
}
