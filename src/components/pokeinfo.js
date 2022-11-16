import React from "react";
import "../styles/pokeinfo.css";

function Pokeinfo({ pokeDex }) {
  return (
    <>
      {pokeDex ? (
        <div className="pokeinfo">
          <div className="top-pokeinfo">
            <div className="sub-top-pokeinfo">
              <h2 className="number-pokeinfo">{pokeDex.id}</h2>
              <h1 className="name-pokeinfo">{pokeDex.name}</h1>
            </div>
            <div className="types-container types-pokeinfo">
              {pokeDex.types.map((type, idx) => {
                let types = type.type.name;

                return (
                  <div key={idx} className={`types ${types}`}>
                    {types}
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div className="description">
              {pokeDex.abilities.map((ability, idx) => {
                let abi = ability.ability.name;
                let hidden = ability.is_hidden;

                return (
                  <div className="abilities">
                    <p>{hidden ? "Hidden Ability" : "Ability"}</p>
                    <div key={idx}>{abi}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="img-stats-container">
            <div>
              <img
                className="img-pokeinfo"
                src={pokeDex.sprites.front_default}
                alt={pokeDex.name}
              />
            </div>
            <ul className="stats-pokeinfo">
              <li>
                <p>HP</p> {pokeDex.stats[0].base_stat}
              </li>
              <li>
                <p>Attack</p> {pokeDex.stats[1].base_stat}
              </li>
              <li>
                <p>Defense</p> {pokeDex.stats[2].base_stat}
              </li>
              <li>
                <p>Sp-attack</p> {pokeDex.stats[3].base_stat}
              </li>
              <li>
                <p>Sp-defense</p> {pokeDex.stats[4].base_stat}
              </li>
              <li>
                <p>Speed</p> {pokeDex.stats[5].base_stat}
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Pokeinfo;
