import { Container } from "./styles";
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/theme-context";

const TypePokemonFilter = () => {
  const { themeData } = useContext(ThemeContext);

  return (
    <Container themeData={themeData}>
      <p>Selecione o tipo de pokemon:</p>
      <select>
        <option>Todos</option>
        <option>Type1</option>
        <option>Type2</option>
      </select>
    </Container>
  );
};

export { TypePokemonFilter };
