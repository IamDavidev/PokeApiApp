const urlPokemon = () => {
  const response = fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((response) => response.json())
    .then((data) => {
      const pokemons = data.results;
      const pokemonsURL = pokemons.map((pokemon) => pokemon.url);
      return pokemonsURL;
    });
    console.log(response);
  return response;
};

export default urlPokemon;
