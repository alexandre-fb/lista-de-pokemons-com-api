import pokeball from "../../assets/images/pokeball.png";
import { Container } from './styles'

const Loading = () => {
  return (
    <Container>
      <img src={pokeball} alt={pokeball}></img>
    </Container>
  )
}

export { Loading }