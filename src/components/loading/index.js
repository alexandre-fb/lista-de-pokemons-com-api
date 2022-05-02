import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import pokeball from "../../assets/images/pokeball.png";
import { Container } from './styles'

const Loading = () => {

  const { themeData } = useContext(ThemeContext)

  return (
    <Container themeData={themeData}>
      <img src={pokeball} alt={pokeball}></img>
      <p>Carregando...</p>
    </Container>
  )
}

export { Loading }