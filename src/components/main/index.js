import { TypePokemonFilter } from "./type-pokemon-filter"
import { PokemonsList } from "./pokemons-list"

const Main = () => {
    return (
        <main>
            <TypePokemonFilter />
            <PokemonsList />
            {/* <ButtonShowMore /> */}
        </main>
    )
}

export {Main}