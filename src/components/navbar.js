import React from "react";
import Searchbar from "./searchbar";
import "../styles/navbar.css";

function Navbar({ infoPokemon, pokemons }) {
  return (
    <nav className="navbar">
      <div>
        <h1 className="pokedex-navbar">Pokedex</h1>
      </div>
      <Searchbar infoPokemon={infoPokemon} pokemons={pokemons} />
    </nav>
  );
}

export default Navbar;
