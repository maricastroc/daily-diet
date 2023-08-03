import styled from 'styled-components/native'

export type InputTypeStyleProps = 'DEFAULT' | 'BIGGER'

type Props = {
  type: InputTypeStyleProps
}

export const Container = styled.View<Props>`
  height: ${({ type }) => (type === 'DEFAULT' ? '48px' : '120px')};
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
`

export const InputText = styled.TextInput.attrs<Props>(({ type }) => ({
  multiline: type === 'BIGGER',
}))<Props>`
  background-color: ${({ theme }) => theme.colors.gray_400};
  color: ${({ theme }) => theme.colors.gray_100};
  font-size: ${({ theme }) => theme.font_size.sm}px;
  font-family: ${({ theme }) => theme.font_family.regular};
  padding: 12px;
  border: solid 1px ${({ theme }) => theme.colors.gray_500};
  border-radius: 8px;
  width: 100%;
  flex: 1;
`
