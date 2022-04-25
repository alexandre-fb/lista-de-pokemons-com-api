import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/theme-context";
import { getPokemonsData, getPokemonAbilities } from "../../services/pokemons";
import { Container, Name, ButtonBackHome } from "./styles";
import { GridData } from "./grid-data";
import { Loading } from "../loading";

const MainDetails = () => {
  const { themeData } = useContext(ThemeContext)
  const { name } = useParams();

  const [pokemonData, setPokemonData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemonData() {
      const apiPokemonData = await getPokemonsData(name);
      const listUrlAbilities = apiPokemonData.abilities.map(
        (item) => item.ability.url
      );
      const promisesApiPokemonAbilities = listUrlAbilities.map((url) =>
        getPokemonAbilities(url)
      );
      const apiPokemonsAbilities = await Promise.all(
        promisesApiPokemonAbilities
      );

      setPokemonData({
        name: apiPokemonData.name,
        image: apiPokemonData.sprites.other["official-artwork"].front_default,
        abilities: apiPokemonsAbilities,
        types: apiPokemonData.types,
        moves: apiPokemonData.moves,
      });

      setLoading(false);
    }

    window.scrollTo(0, 0);
    fetchPokemonData();
  }, [name]);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Name themeData={themeData}>{pokemonData.name}</Name>
          <img src={pokemonData.image} alt={pokemonData.name} />
          <GridData pokemonData={pokemonData} />
          <Link to="/">
            <ButtonBackHome>Voltar para Home</ButtonBackHome>
          </Link>
        </>
      )}
    </Container>
  );
};

export { MainDetails };
