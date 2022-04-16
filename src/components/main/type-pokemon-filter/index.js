import { Container } from "./container";
import { InputTypeText } from "./input-type-text";
import { Select } from "./select";

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
