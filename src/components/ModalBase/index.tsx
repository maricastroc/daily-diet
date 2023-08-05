import { ContainerForTwoItems } from '@components/ContainerForTwoItems'
import {
  Container,
  ModalButtonsContainer,
  ModalContent,
  ModalTitle,
} from './styles'
import { ButtonModal } from '@components/ButtonModal'
import { View } from 'react-native'

interface ModalProps {
  isVisible: boolean
  toggleModal: () => void
  onPress: () => void
}

export function ModalBase({ isVisible, toggleModal, onPress }: ModalProps) {
  return (
    <Container isVisible={isVisible}>
      <ModalContent>
        <ModalTitle>Do you really want to delete the meal record?</ModalTitle>
        <ContainerForTwoItems>
          <ModalButtonsContainer>
            <ButtonModal
              title="No, Cancel!"
              type="SECONDARY"
              onPress={toggleModal}
            />
            <View style={{ marginLeft: 6, marginRight: 6 }} />
            <ButtonModal
              title="Yes, confirm"
              type="PRIMARY"
              onPress={onPress}
            />
          </ModalButtonsContainer>
        </ContainerForTwoItems>
      </ModalContent>
    </Container>
  )
}
