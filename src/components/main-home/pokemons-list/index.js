import { useState, useEffect } from "react";
import { getPokemonsData, getPokemonsList } from "../../../services/pokemons";
import { Link } from "react-router-dom";
import { Loading } from "../../loading";
import { Container, ListOfCards, Card, Name, ShowMoreButton } from "./styles";


const PokemonsList = () => {
  const [listPokemonsData, setListPokemonsData] = useState([]);
  const [amountOfCards, setAmountOfCards] = useState(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemonsData() {
      const apiPokemonsList = await getPokemonsList(amountOfCards);
      const promisesPokemonsData = apiPokemonsList.results.map((pokemon) => {
        return getPokemonsData(pokemon.name);
      });

      const apiPokemonsData = await Promise.all(promisesPokemonsData);

      setListPokemonsData({
        pokemons: apiPokemonsData.map((pokemon) => {
          return {
            name: pokemon.name,
            image: pokemon.sprites.other.dream_world.front_default,
          };
        }),
      });

      setLoading(false);
    }

    fetchPokemonsData();
  }, [amountOfCards]);

  const handleShowMoreClick = () => {
    setAmountOfCards(amountOfCards + 10);
  };

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ListOfCards>
            {listPokemonsData.pokemons.map((pokemon, index) => {
              return (
                <Card key={index}>
                  <Link to={`/pokemon/${pokemon.name}`}>
                    <img src={pokemon.image} alt={`${pokemon.name}`} />
                    <Name>{pokemon.name}</Name>
                  </Link>
                </Card>
              );
            })}
          </ListOfCards>
          <ShowMoreButton onClick={handleShowMoreClick}>
            Carregar mais
          </ShowMoreButton>
        </>
      )}
    </Container>
  );
};

export { PokemonsList };
