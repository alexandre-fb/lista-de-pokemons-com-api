import { useState, useEffect } from "react";
import { getPokemonsList } from "../../services/pokemons";
import { Card } from "./card"

const PokemonsList = () => {

    const [pokemonsList, setPokemonsList] = useState([])

    useEffect(()=>{
      const fetchPokemonsList = async () => {
        const apiPokemonsList = await getPokemonsList(2)
  
        setPokemonsList(apiPokemonsList.results)
      }
      fetchPokemonsList()
    }, [])
  
    console.log(pokemonsList)

    return (
        <>
        <ul>
        {pokemonsList.map((item, index) => {
          return (
            <li key={index}>
              <Card name={item.name}/>
            </li>
          );
        })}
      </ul>
        </>
    )
}

export { PokemonsList }

