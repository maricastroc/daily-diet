import styled from 'styled-components/native'

export const AvatarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
`

export const AvatarDefault = styled.Image`
  overflow: hidden;
  object-fit: cover;
  border-radius: 9999px;
  width: 40px;
  height: 40px;
`
