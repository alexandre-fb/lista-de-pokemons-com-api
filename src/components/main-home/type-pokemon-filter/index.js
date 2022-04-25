import { Container } from "./styles";
import { useContext } from 'react';
import { ThemeContext } from "../../../contexts/theme-context";

const TypePokemonFilter = () => {

  const { themeData } = useContext(ThemeContext)

  return (
    <Container themeData={themeData}>
      <input type="text" placeholder="Digite o tipo de pokemon" />
      <p>ou</p>
      <select>
        <option>Selecione</option>
        <option>Type</option>
      </select>
    </Container>
  );
};

export { TypePokemonFilter };
