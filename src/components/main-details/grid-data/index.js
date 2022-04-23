import { Container, DataBox, Title, MovesContent } from "./styles";

const GridData = ({ pokemonData }) => {
  return (
    <Container>
      <DataBox className="types">
        <Title>Tipo</Title>
        <ul>
          {pokemonData.types.map((item, index) => (
            <li key={index}>
              <h4>{item.type.name}</h4>
            </li>
          ))}
        </ul>
      </DataBox>

      <DataBox className="abilities">
        <Title>Habilidades</Title>
        <ul>
          {pokemonData.abilities.map((ability, index) => {
            return (
              <li key={index}>
                <h4>{ability.name}</h4>
                <p>{ability.flavor_text_entries[0].flavor_text}</p>
              </li>
            );
          })}
        </ul>
      </DataBox>

      <DataBox className="moves">
        <Title>Movimentos</Title>
        <MovesContent>
          {pokemonData.moves.map((item, index) => {
            return index === pokemonData.moves.length - 1
              ? `${item.move.name}.`
              : `${item.move.name}, `;
          })}
        </MovesContent>
      </DataBox>
    </Container>
  );
};

export { GridData };
