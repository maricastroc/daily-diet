import { AvatarContainer, AvatarDefault } from './styles'
import AvatarImage from '../../assets/avatar.jpg'

export function Avatar() {
  return (
    <AvatarContainer>
      <AvatarDefault source={AvatarImage} alt="" />
    </AvatarContainer>
  )
}
