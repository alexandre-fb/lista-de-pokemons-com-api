// import { useState, useEffect } from "react";
// import { getPokemonsList } from "../../../services/pokemons";
import { SectionContainer } from "../../section-container";
import { ListOfCards } from "./list-of-cards";
import { Card } from "./card";

const PokemonsList = () => {
  // const [pokemonsList, setPokemonsList] = useState([]);

  // useEffect(() => {
  //   const fetchPokemonsList = async () => {
  //     const apiPokemonsList = await getPokemonsList(2);

  //     setPokemonsList(apiPokemonsList.results);
  //   };
  //   fetchPokemonsList();
  // }, []);

  // console.log(pokemonsList);

  let quantidadeDeCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <SectionContainer>
      <ListOfCards>
        {quantidadeDeCards.map((item, index) => {
          return (
            <Card key={index} />
            // <Card key={index}>
            //   <Image />
            //   <Name>Pokemon Name</Name>
            // </Card>
          );
        })}
      </ListOfCards>
      {/* <ul>
        {pokemonsList.map((item, index) => {
          return (
            <li key={index}>
              <Card name={item.name} />
            </li>
          );
        })}
      </ul> */}
    </SectionContainer>
  );
};

export { PokemonsList };
