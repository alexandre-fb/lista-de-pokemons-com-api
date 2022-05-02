import { Container } from "./styles";

const TypePokemonFilter = ({ setTypeSelected, themeData, listTypeNames }) => {
  const handleChange = (event) => {
    setTypeSelected(event.target.value);
  };

  return (
    <Container themeData={themeData}>
      <p>Selecione o tipo de pokemon:</p>
      <select onChange={handleChange}>
        <option value="todos">Selecione</option>
        <option value="todos">Todos</option>
        {listTypeNames.map((name, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
      </select>
    </Container>
  );
};

export { TypePokemonFilter };
