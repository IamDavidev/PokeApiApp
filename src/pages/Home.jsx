import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=10'
  );
  // const [next, setNext] =usePoke()
  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
        await allPokemons.sort((a, b) => a.id - b.id);
      });
    }
    createPokemonObject(data.results);
  };
  // console.log(next);
  // console.log(allPokemons);
  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="app_contaner">
      <h2>Pokemon Evolution</h2>
      <div className="center_pokemons">
        <div className="all_container">
          {allPokemons.map((pokemonStats, index) => (
            <div className="render_card_pokemon" key={pokemonStats.name}>
              <h3>{pokemonStats.name}</h3>
              <div className="card_container_img">
                <img
                  className="img_pokemon"
                  src={pokemonStats.sprites.other.dream_world.front_default}
                  alt={pokemonStats.name}
                />
                <time>{pokemonStats.base_experience}</time>
              </div>
              <Link to={`/pokemon/${pokemonStats.name}`}>view info ...</Link>
            </div>
          ))}
        </div>
      </div>
      <button className="load_more" onClick={() => getAllPokemons()}>
        Load more
      </button>
      <Link to="/berries">Home</Link>
    </div>
  );
};

export default App;
