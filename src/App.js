import React, { useState, useEffect } from "react";
import { getPokemon, getPokemonData } from "./api";
import "./App.css";
import Navbar from "./components/navbar";
import Pokedex from "./components/pokedex";
import Pokeinfo from "./components/pokeinfo";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [pokeDex, setPokeDex] = useState();

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      const data = await getPokemon(10, 10 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 10));
    } catch (err) {}
  };

  useEffect(() => {
    fetchPokemon();
  }, [page]);

  return (
    <div>
      <div className="App">
        <Navbar infoPokemon={(poke) => setPokeDex(poke)} pokemons={pokemons} />
      </div>
      <div className="container">
        <div className="pokemon-container">
          <Pokeinfo pokeDex={pokeDex} />
        </div>
        <div className="list-container">
          <Pokedex
            loading={loading}
            pokemons={pokemons}
            page={page}
            setPage={setPage}
            total={total}
            infoPokemon={(poke) => setPokeDex(poke)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
