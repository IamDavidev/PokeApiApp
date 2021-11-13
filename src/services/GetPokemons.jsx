import { useState } from 'react';
const getAllPokemons = async () => {
  const [pokemons, setPokemons] = useState([]);
  const [loadmore, setLoadmore] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=50'
  );

  const reponse = await fetch(loadmore)
    .then((rew) => rew.json())
    .then((data) => data);

  setLoadmore(reponse.next);
  setPokemons(Response);

 return pokemons;
};
export default getAllPokemons;
