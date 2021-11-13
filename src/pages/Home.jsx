// import urlPokemon from "../helpers/GetPokemonsURL";
import { useState, useEffect } from 'react';
const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loadmore, setLoadmore] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=50'
  );
  const getPokmons = async () => {
    const reponse = await fetch(loadmore)
      .then((rew) => rew.json())
      .then((data) => data);

    setLoadmore(reponse.next);

    function createPokemons(pokemons) {
      pokemons.forEach(async (pokemon) => {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        ).then((data) => data.json());
        setPokemons((currentList) => [...currentList, response]);
      });
    }

    createPokemons(reponse.results);
    // await console.log(pokemons);
  };

  useEffect(() => {
    getPokmons();
    // getPokmons();
  }, []);
  console.log(pokemons);
  return (
    <div>
      <h1>Home</h1>
      <button className="load-more" onClick={() => getPokmons()}>
        Load more
      </button>
      {
        pokemons.map((pokemon)=>{
          <div> 
          <p>{pokemon.name}</p>
          <p>name</p>
          </div>
        })
      }
    </div>
  );
};

export default Home;
