import { TypePokemonFilter } from "./type-pokemon-filter";
import { PokemonsList } from "./pokemons-list";

const MainHome = () => {
  return (
    <main>
      <TypePokemonFilter />
      <PokemonsList />
    </main>
  );
};

export { MainHome };
