import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getPokemonsData, getPokemonAbilities } from "../../services/pokemons";
import { Container, Name, Image, ButtonBackHome } from "./styles";
import { GridData } from "./grid-data";
import { Loading } from "../loading";

const MainDetails = () => {
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
        imageDreamWorld: apiPokemonData.sprites.other.dream_world.front_default,
        imageOfficialArtwork:
          apiPokemonData.sprites.other["official-artwork"].front_default,
        abilities: apiPokemonsAbilities,
        types: apiPokemonData.types,
        moves: apiPokemonData.moves,
      });

      setLoading(false);
    }
    window.scrollTo(0, 0);
    fetchPokemonData();
  }, []);
  console.log(pokemonData);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Name>{pokemonData.name}</Name>
          <Image src={pokemonData.imageOfficialArtwork} alt="imagem" />
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
