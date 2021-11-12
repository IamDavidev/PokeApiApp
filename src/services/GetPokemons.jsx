import {useEffect, useState} from 'react';
// get  pokemons
const GetPokemon = async (id) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
  return res;
};
const GetPokemons =  (pokemons) =>{
  const [pokemonsList, setPokemonsList] = useState([]);
  useEffect(async () => {
  for(let i = 1; i <= pokemons; i++){
   await GetPokemon(i).then((data) => setPokemonsList([...pokemonsList, data]));
  }
  }, [pokemons]);
  return pokemonsList;
}

export default GetPokemons;
