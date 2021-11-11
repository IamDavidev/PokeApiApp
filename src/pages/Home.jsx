import usePoke from "../hooks/usePoke";
const Home = () => {
  const pokemons = usePoke();
console.log(pokemons);
  return (
    <div>
      <h1>Home</h1>
    {
      pokemons.map(poke=>(
        <a href={poke.url}>
        {poke.name}
        </a>
      ))
    }
    </div>
  );
};

export default Home;
