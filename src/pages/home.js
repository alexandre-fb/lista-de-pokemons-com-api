import styled from "styled-components";
import { Header } from "../components/header";
import { Main } from "../components/main";
import { PokemonsList } from "../components/pokemons-list"

const Home = () => {

  return (
    <Container>
      <Header />
      <Main>
        <PokemonsList />
      </Main>
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
