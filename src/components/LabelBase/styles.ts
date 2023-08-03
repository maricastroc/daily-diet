import styled from 'styled-components/native'

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.font_size.sm}px;
  font-family: ${({ theme }) => theme.font_family.bold};
  color: ${({ theme }) => theme.colors.white};
`
