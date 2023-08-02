import {
  ButtonIcon,
  Container,
  Heading,
  Icon,
  Paragraph,
  TextContainer,
} from './styles'

export function StatisticCard() {
  return (
    <Container>
      <TextContainer>
        <Heading>90,86%</Heading>
        <Paragraph>of the meals within the diet</Paragraph>
      </TextContainer>
      <ButtonIcon>
        <Icon name="arrow-up-right" />
      </ButtonIcon>
    </Container>
  )
}
