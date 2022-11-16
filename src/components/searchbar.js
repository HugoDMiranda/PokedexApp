import React, { useState } from "react";
import { searchPokemon } from "../api";
import "../styles/searchbar.css";

function Searchbar({ infoPokemon }) {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();
  // const [input, setInput] = useState('')

  function onChange(e) {
    setSearch(e.target.value);
  }

  const onClick = async (e) => {
    const data = await searchPokemon(search);
    await setPokemon(data);
    infoPokemon(pokemon);
  };

  const onKey = async (e) => {
    if (e.key === "Enter") {
      const data = await searchPokemon(search);
      await setPokemon(data);
      infoPokemon(pokemon);
    }
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input
          className="input-navbar"
          placeholder="Look Pokemon..."
          onChange={onChange}
          onKeyPress={onKey}
          type="text"
        />
      </div>
      <div className="searchbar-btn">
        <button onClick={onClick}>Buscar</button>
      </div>
    </div>
  );
}

export default Searchbar;
