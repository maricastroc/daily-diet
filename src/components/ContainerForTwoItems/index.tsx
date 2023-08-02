import { ReactNode } from 'react'
import { Container } from './styles'

interface ContainerForTwoItemsProps {
  children: ReactNode
}

export const ContainerForTwoItems = ({
  children,
}: ContainerForTwoItemsProps) => {
  return <Container>{children}</Container>
}
