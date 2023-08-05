import styled from 'styled-components/native'

export const ButtonsContainer = styled.View`
  margin-top: 12px;
  gap: 12px;
  margin-bottom: 24px;
`

export const ButtonsLabel = styled.Text`
  font-size: ${({ theme }) => theme.font_size.sm}px;
  font-family: ${({ theme }) => theme.font_family.bold};
  color: ${({ theme }) => theme.colors.white};
`
