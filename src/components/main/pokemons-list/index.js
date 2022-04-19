import { useState, useEffect } from "react";
import { getPokemonsData, getPokemonsList } from "../../../services/pokemons";
import { Container, ListOfCards, Card, Image, Name } from "./styles";
import { PrimaryButton } from "../../primary-button";

const PokemonsList = () => {
  const [pokemonsData, setPokemonsData] = useState([]);
  const [amountOfCards, setAmountOfCards] = useState(10);

  useEffect(() => {

    async function fetchPokemonsData() {
      const apiPokemonsList = await getPokemonsList(amountOfCards);
      const promisesPokemonsData = apiPokemonsList.results.map((item) => {
        return getPokemonsData(item.url);
      });
      const apiPokemonsData = await Promise.all(promisesPokemonsData);

      setPokemonsData(apiPokemonsData);
    }

    fetchPokemonsData();

  }, [amountOfCards]);

  const handleButtonClick = () => {
    setAmountOfCards(amountOfCards + 10);
  };

  return (
    <Container>
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
      <PrimaryButton onClick={handleButtonClick}>Carregar mais</PrimaryButton>
    </Container>
  );
};

export { PokemonsList };
