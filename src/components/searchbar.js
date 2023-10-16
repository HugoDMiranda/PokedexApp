import React, { useState } from "react";
import { searchPokemon } from "../api";
import "../styles/searchbar.css";

function Searchbar({ infoPokemon }) {
  const [search, setSearch] = useState("");

  function onChange(e) {
    setSearch(e.target.value);
  }

  const onClick = async () => {
    if (search !== "") {
      const data = await searchPokemon(search);
      infoPokemon(data);
    }
  };

  const onKey = async (e) => {
    if (e.key === "Enter" && search !== "") {
      const data = await searchPokemon(search);
      infoPokemon(data);
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
