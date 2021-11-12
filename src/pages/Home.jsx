import GetPokemons from '../services/GetPokemons';
// import GeTPokemons from '../services/GetPokemons';

// import pokemons from "../services/GetPokemons";
// GetPokemons
const Home = () => {
  const pokemons = GetPokemons(10);
  console.log(pokemons);

  return (
    <div>
      <h1>Home</h1>
      
    </div>
  );
};

export default Home;
