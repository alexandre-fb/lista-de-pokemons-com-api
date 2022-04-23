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
import { Link } from "react-router-dom";

const PokemonsList = () => {
  const [listPokemonsData, setListPokemonsData] = useState([]);
  const [amountOfCards, setAmountOfCards] = useState(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemonsData() {
      const apiPokemonsList = await getPokemonsList(amountOfCards);
      const promisesPokemonsData = apiPokemonsList.results.map((item) => {
        return getPokemonsData(item.name);
      });

      const apiPokemonsData = await Promise.all(promisesPokemonsData);

      setListPokemonsData({
        pokemons: apiPokemonsData.map((pokemon) => {
          return {
            name: pokemon.name,
            imageDreamWorld: pokemon.sprites.other.dream_world.front_default,
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
                    <Image src={pokemon.imageDreamWorld} />
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
