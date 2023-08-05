import { TouchableOpacityProps } from 'react-native'
import {
  ButtonIcon,
  Container,
  Heading,
  Icon,
  Paragraph,
  TextContainer,
} from './styles'

type StatisticCardProps = TouchableOpacityProps & {
  value: string
  onDiet: boolean
}

export function StatisticCard({ value, onDiet, ...rest }: StatisticCardProps) {
  return (
    <Container type={onDiet ? 'ONDIET' : 'OFFDIET'} {...rest}>
      <TextContainer>
        <Heading>{`${value}%`}</Heading>
        <Paragraph>of the meals within the diet</Paragraph>
      </TextContainer>
      <ButtonIcon>
        <Icon type={onDiet ? 'ONDIET' : 'OFFDIET'} name="arrow-up-right" />
      </ButtonIcon>
    </Container>
  )
}
