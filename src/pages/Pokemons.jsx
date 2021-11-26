import { useState, useEffect, useContext } from 'react';
import NoUser from '../components/NoUser';
import PokemonsList from '../components/PokemonsList';
import UserContext from '../Context/UserContext';

const Pokemons = () => {
  const { user, setUser } = useContext(UserContext);
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

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <>
      {user.isLoggedIn === true ? (
        <div className="app_contaner">
          <h1>Pokemon Evolution</h1>
          <div className="center_pokemons">
            <div className="all_container">
              <PokemonsList pokemons={allPokemons} />
            </div>
          </div>
          <button className="load_more" onClick={() => getAllPokemons()}>
            Load more
          </button>
        </div>
      ) : (
        <NoUser />
      )}
    </>
  );
};

export default Pokemons;
