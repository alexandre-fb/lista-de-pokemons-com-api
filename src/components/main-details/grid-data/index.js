import { Container, DataBox } from "./styles";

const GridData = ({ pokemonData }) => {
  return (
    <Container>

      <DataBox className="types">
        <h3>Tipo</h3>
        <ul>
          {pokemonData.types.map((item, index) => (
            <li key={index}>{item.type.name}</li>
          ))}
        </ul>
      </DataBox>

      <DataBox className="abilities">
        <h3>Habilidades</h3>
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
        <h3>Movimentos</h3>
        <p>
          {pokemonData.moves.map((item, index) => {
            return index === pokemonData.moves.length - 1
              ? `${item.move.name}.`
              : `${item.move.name}, `;
          })}
        </p>
      </DataBox>
      
    </Container>
  );
};

export { GridData };
