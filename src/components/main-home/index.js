import { TypePokemonFilter } from "./type-pokemon-filter";
import { PokemonsList } from "./pokemons-list";
import { useContext } from 'react'
import {ThemeContext} from '../../contexts/theme-context'

const MainHome = () => {

  const { themeData } = useContext(ThemeContext)

  return (
    <main >
      <TypePokemonFilter />
      <PokemonsList />
    </main>
  );
};

export { MainHome };
