const urlBasePokeApi = "https://pokeapi.co/api/v2/pokemon";

async function getPokemonsList(quant) {
  const response = await fetch(`${urlBasePokeApi}/?limit=${quant}`);
  return response.json();
}

async function getPokemonData(name) {
  const response = await fetch(`${urlBasePokeApi}/${name}`);
  return response.json();
}

export { getPokemonsList, getPokemonData };
