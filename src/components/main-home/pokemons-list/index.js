import { useState, useEffect } from "react";
import { getPokemonsData, getPokemonsList } from "../../../services/pokemons";
import {
  Container,
  ListOfCards,
  Card,
  Image,
  Name,
  ShowMoreButton,
} from "./styles";
import { Loading } from "../../loading";

const PokemonsList = () => {
  const [pokemonsData, setPokemonsData] = useState([]);
  const [amountOfCards, setAmountOfCards] = useState(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemonsData() {
      const apiPokemonsList = await getPokemonsList(amountOfCards);
      const promisesPokemonsData = apiPokemonsList.results.map((item) => {
        return getPokemonsData(item.name);
      });

      const apiPokemonsData = await Promise.all(promisesPokemonsData);

      setPokemonsData(apiPokemonsData);
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
            {pokemonsData.map((pokemonData, index) => {
              return (
                <Card key={index}>
                  <Image
                    src={pokemonData.sprites.other.dream_world.front_default}
                  />
                  <Name>{pokemonData.name}</Name>
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
