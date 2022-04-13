const urlBasePokeApi = "https://pokeapi.co/api/v2";

async function getPokemonsList(quant) {
  const response = await fetch(`${urlBasePokeApi}/pokemon?limit=${quant}`);
  return response.json();
}

async function getPokemonsData(name) {
  const response = await fetch(`${urlBasePokeApi}/pokemon/${name}`);
  return response.json();
}

export { getPokemonsList, getPokemonsData };
