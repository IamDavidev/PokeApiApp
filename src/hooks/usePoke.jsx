import { useState,useEffect } from "react";
import getAllPokemons from "../services/GetPokemons";
const usePoke = ()=>{
    const [pokemons, setPokemons] = useState([]);
    function createPokemons(data) {
        data.forEach(async (pokemon) => {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
          ).then((data) => data.json());
          setPokemons((currentList) => [...currentList, response]);
        });
      }
    useEffect(()=>{

    },[])
    
}