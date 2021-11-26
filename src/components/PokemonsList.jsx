import { Link } from 'react-router-dom';

const PokemonsList = ({ pokemons }) => {
  return (
    <>
      {pokemons.map((pokemonStats) => (
        <div className="render_card_pokemon" key={pokemonStats.name}>
          <h3>{pokemonStats.name}</h3>
          <div className="card_container_img">
            <img
              loading="lazy"
              className="img_pokemon"
              src={pokemonStats.sprites.other.dream_world.front_default}
              alt={pokemonStats.name}
            />
            <time>{pokemonStats.base_experience}</time>
          </div>
          <Link to={`/pokemon/${pokemonStats.name}`}>view info ...</Link>
        </div>
      ))}
    </>
  );
};

export default PokemonsList;
