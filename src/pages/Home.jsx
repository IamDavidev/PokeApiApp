import GetPokemons from "../services/GetPokemons";
const Home = () => {
  console.log(GetPokemons())
  return ( 
    <div>
      <h1>Home</h1>
    </div>
  )
};

export default Home;
