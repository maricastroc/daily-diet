import Modal from 'react-native-modal'
import styled, { css } from 'styled-components/native'

export const Container = styled(Modal)`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const ModalContent = styled.View`
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.gray_600};
  border-radius: 8px;
  padding: 25px;
  align-items: center;
  justify-content: space-around;
`

export const ModalTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.md}px;
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.white};
  `}
  text-align: center;
  margin-top: 5px;
`

export const ModalButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
