import { Container, Logo } from './styles'
import LogoImage from '../../assets/logo.png'
import { Avatar } from '@components/Avatar'

export function HomeHeader() {
  return (
    <Container>
      <Logo source={LogoImage} alt="" />
      <Avatar />
    </Container>
  )
}
