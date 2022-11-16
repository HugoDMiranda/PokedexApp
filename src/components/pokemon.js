import React from "react";
import "../styles/pokemon.css";

function Pokemon({ pokemon, infoPokemon }) {
  return (
    <div onClick={() => infoPokemon(pokemon)} style={{ cursor: "pointer" }}>
      {pokemon.id < 899 ? (
        <div className="pokemon-pokedex">
          <div>
            <h5 className="pokemon-pokedex-number">#{pokemon.id}</h5>
          </div>
          <div>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </div>
          <div>
            <h3>{pokemon.name}</h3>
          </div>
          <div className="types-container">
            {pokemon.types.map((type, idx) => {
              let types = type.type.name;

              return (
                <div key={idx} className={`types ${types}`}>
                  {types}
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Pokemon;
