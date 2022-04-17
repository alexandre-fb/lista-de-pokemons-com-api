import { TypePokemonFilter } from "./type-pokemon-filter";
import { PokemonsList } from "./pokemons-list";
import { ButtonShowMore } from "./button-show-more";

const Main = () => {
  return (
    <main>
      <TypePokemonFilter />
      <PokemonsList />
      <ButtonShowMore />
    </main>
  );
};

export { Main };
