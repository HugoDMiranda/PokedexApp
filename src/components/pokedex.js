import React from 'react'
import Pagination from './pagination'
import Pokemon from './pokemon'
import '../styles/pokedex.css'
import Loading from './loading';

function Pokedex( {pokemons, page, setPage, total, loading, infoPokemon} ) {

  function lastPage () {
     const nextPage = Math.max(page -1, 0);
     setPage(nextPage)
  }

  function nextPage () {
    const nextPage = Math.min(page +1, total);
     setPage(nextPage)
  }
 
  return (
    <div>
      <div className='header'>
        <h1>Pokedex</h1>
        <Pagination 
          onLeftClick={lastPage}
          onRightClick={nextPage}
          page={page + 1}
          totalPages={total}
        />
      </div>
      <div className={loading ? 'loading' : null}>
        {loading ? <Loading /> 
        : pokemons.map((pokemon) => {
          return (
            <Pokemon key={pokemon.name} pokemon={pokemon} infoPokemon={infoPokemon}/> 
          )
        } )} 
      </div>
    </div>
  )
}

export default Pokedex