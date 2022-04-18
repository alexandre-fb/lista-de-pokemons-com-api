import { Container, InputTypeText, Select } from "./styles";

const TypePokemonFilter = () => {
  return (
    <Container>
      <InputTypeText />
      <p>ou</p>
      <Select>
        <option>Selecione</option>
        <option>Type</option>
      </Select>
    </Container>
  );
};

export { TypePokemonFilter };
