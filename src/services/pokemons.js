const urlBasePokeApi = "https://pokeapi.co/api/v2/pokemon";

async function getPokemonsList(amount) {
  const response = await fetch(`${urlBasePokeApi}/?limit=${amount}`);
  return await response.json();
}

async function getPokemonsData(name) {
  const response = await fetch(`${urlBasePokeApi}/${name}`);
  return await response.json();
}

async function getPokemonAbilities(url) {
  const response = await fetch(url);
  return await response.json();
}

async function getTypesList() {
  const response = await fetch("https://pokeapi.co/api/v2/type");
  return await response.json();
}

async function getTypeData(url) {
  const response = await fetch(url);
  return await response.json();
}

export {
  getPokemonsList,
  getPokemonsData,
  getPokemonAbilities,
  getTypesList,
  getTypeData,
};
