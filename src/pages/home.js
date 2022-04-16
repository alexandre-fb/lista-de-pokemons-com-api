import styled from "styled-components";
import { Header } from "../components/header";
import { PokemonsList } from "../components/pokemons-list"

const Home = () => {

  return (
    <Container>
      <Header />
      <PokemonsList />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10%;
  max-width: 1920px;
  margin: 0 auto;
` 

export { Home };
