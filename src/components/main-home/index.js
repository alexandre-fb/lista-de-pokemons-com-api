import { TypePokemonFilter } from "./type-pokemons-filter";
import { PokemonsList } from "./pokemons-list";
import { useState, useEffect, useContext } from "react";
import {
  getPokemonsList,
  getPokemonsData,
  getTypesList,
  getTypeData,
} from "../../services/pokemons";
import { ThemeContext } from "../../contexts/theme-context";
import { Loading } from "../loading";
import { Container, PokemonTypeName } from "./styles";
import { PrimaryButton } from "../primary-button";

const MainHome = () => {
  const { themeData } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);
  const [amountOfCardsToShow, setAmountOfCardsToShow] = useState(10);
  const [allPokemonsData, setAllPokemonsData] = useState([]);
  const [pokemonsTypeSelectedData, setPokemonsTypeSelectedData] = useState([]);
  const [pokemonsToShow, setPokemonsToShow] = useState([]);
  const [typeSelected, setTypeSelected] = useState("todos");
  const [listTypeNames, setListTypeNames] = useState([]);

  useEffect(() => {
    async function fetchAllPokemonsData() {
      if (typeSelected !== "todos") return;

      const apiGeneralData = await getPokemonsList(amountOfCardsToShow);
      const promisesAllPokemonsData = apiGeneralData.results.map((pokemon) =>
        getPokemonsData(pokemon.name)
      );
      const apiAllPokemonsData = await Promise.all(promisesAllPokemonsData);
      const allPokemonsData = apiAllPokemonsData.map((pokemon) => {
        return {
          name: pokemon.name,
          image: pokemon.sprites.other.dream_world.front_default,
          altImage: pokemon.sprites.front_default,
          types: pokemon.types,
        };
      });

      setAllPokemonsData(allPokemonsData);
    }

    fetchAllPokemonsData();
  }, [amountOfCardsToShow, typeSelected]);

  useEffect(() => {
    async function fetchTypesPokemonsData() {
      const apiTypesList = await getTypesList();
      const listTypeNames = await apiTypesList.results.map((type) => type.name);

      setListTypeNames(listTypeNames);

      if (typeSelected === "todos") return;

      const promisesEachTypeData = apiTypesList.results.map((type) =>
        getTypeData(type.url)
      );
      const eachTypeData = await Promise.all(promisesEachTypeData);

      const typeSelectedData = eachTypeData.filter(
        (type) => type.name === typeSelected
      );
      const typeSelectedPokemonsNames = typeSelectedData.map((data) =>
        data.pokemon.map((item) => item.pokemon.name)
      );

      const promisesPokemonsTypeSelected = typeSelectedPokemonsNames.map(
        (item) => item.map((name) => getPokemonsData(name))
      );
      const pokemonsTypeSelected = await Promise.all(
        promisesPokemonsTypeSelected[0]
      );

      setPokemonsTypeSelectedData(
        pokemonsTypeSelected.map((pokemon) => {
          return {
            name: pokemon.name,
            image: pokemon.sprites.other.dream_world.front_default,
            altImage: pokemon.sprites.front_default,
          };
        })
      );
    }
    window.scrollTo(0, 0);
    fetchTypesPokemonsData();
  }, [typeSelected]);

  useEffect(() => {
    typeSelected === "todos"
      ? setPokemonsToShow(allPokemonsData)
      : setPokemonsToShow(
          pokemonsTypeSelectedData.filter(
            (pokemon, index) => index < amountOfCardsToShow
          )
        );
  }, [
    allPokemonsData,
    typeSelected,
    pokemonsTypeSelectedData,
    amountOfCardsToShow,
  ]);

  useEffect(() => {
    pokemonsToShow.length > 0 ? setLoading(false) : setLoading(true);
  }, [pokemonsToShow]);

  useEffect(() => {
    setAmountOfCardsToShow(10);
  }, [typeSelected]);

  const handleShowMoreClick = () => {
    setAmountOfCardsToShow(amountOfCardsToShow + 10);
  };

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <TypePokemonFilter
            setTypeSelected={setTypeSelected}
            themeData={themeData}
            listTypeNames={listTypeNames}
          />
          <PokemonTypeName themeData={themeData}>
            Tipo: {typeSelected}
          </PokemonTypeName>
          <PokemonsList pokemons={pokemonsToShow} themeData={themeData} />
          <PrimaryButton
            onClick={handleShowMoreClick}
            style={
              amountOfCardsToShow > pokemonsToShow.length
                ? { opacity: 0.5 }
                : { opacity: 1 }
            }
          >
            "Carregar mais"
          </PrimaryButton>

          {amountOfCardsToShow > 10 && (
            <span onClick={() => window.scrollTo(0, 0)}>
              Voltar para o topo
            </span>
          )}
        </>
      )}
    </Container>
  );
};

export { MainHome };
