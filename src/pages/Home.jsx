// import usePoke from '../hooks/usePoke'
import {useState,useEffect} from 'react'
const App = () => {

   const[allPokemons, setAllPokemons] = useState([])
   const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')
    // const [next, setNext] =usePoke()
  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(results)  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        setAllPokemons( currentList => [...currentList, data])
        await allPokemons.sort((a, b) => a.id - b.id)
      })
    }
    createPokemonObject(data.results)
  }
  // console.log(next);
console.log(allPokemons);
 useEffect(() => {
  getAllPokemons()
 }, [])

  return (
    <div className="app-contaner">
      <h1>Pokemon Evolution</h1>
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons.map( (pokemonStats, index) => 
            <div>
              <p>{pokemonStats.name}</p>
              <img src={pokemonStats.sprites.other.dream_world.front_default} alt={pokemonStats.name} />
            </div>
           
            )}
          
        </div>
          <button className="load-more" onClick={() => getAllPokemons()}>Load more</button>
      </div>
    </div>
  );
}

export default App