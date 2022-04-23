import { Container } from "./styles";

const TypePokemonFilter = () => {
  return (
    <Container>
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
