import { ReactNode } from 'react'
import { Container } from './styles'

interface InnerContainerForTwoItemsProps {
  children: ReactNode
}

export const InnerContainerForTwoItems = ({
  children,
}: InnerContainerForTwoItemsProps) => {
  return <Container>{children}</Container>
}
