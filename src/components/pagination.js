import React from 'react'
import '../styles/pagination.css'

function Pagination({onLeftClick, onRightClick, page }) {

  return (
    <div className='pagination'>
      {page <= 1 ? null : <button onClick={onLeftClick}> {`<`} </button>} 
      <div>{page} - {90}</div>
      {page > 89 ? null : <button onClick={onRightClick}> {`>`} </button>} 
    </div>
  )
}

export default Pagination