import { Link } from "react-router-dom";
import { Container, ListOfCards, Card, Name } from "./styles";

const PokemonsList = ({ pokemons, themeData }) => {
  return (
    <Container>
      <ListOfCards>
        {pokemons.map((pokemon, index) => {
          return (
            <Card key={index}>
              <Link to={`/pokemon/${pokemon.name}`}>
                <img
                  src={`${!pokemon.image ? pokemon.altImage : pokemon.image}`}
                  alt={`${pokemon.name}`}
                />
                <Name themeData={themeData}>{pokemon.name}</Name>
              </Link>
            </Card>
          );
        })}
      </ListOfCards>
    </Container>
  );
};

export { PokemonsList };
