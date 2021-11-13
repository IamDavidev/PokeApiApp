import {useState, useEffect} from 'react' 

const Getpokemons = () => {
const [pokemons, setPokemons] = useState([])
const pokemon= async  (id)=>{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(data => {
      // console.log(data);
        setPokemons([...pokemons, data])
    })
}
const FetchPokemons = ()=>{
  for(let i=1; i<=10; i++){
    pokemon(i)
  }
}
// FetchPokemons()
return pokemons
}
export default Getpokemons