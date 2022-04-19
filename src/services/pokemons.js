const urlBasePokeApi = "https://pokeapi.co/api/v2/pokemon";

async function getPokemonsList(amount) {
  const response = await fetch(`${urlBasePokeApi}/?limit=${amount}`);
  return response.json();
}

async function getPokemonsData(url){
  const response = await fetch(url)
  return response.json()
}

export { getPokemonsList, getPokemonsData } //,  };
