import React from 'react';

function Pokemon({ pokemon }) {

  if (!pokemon) return null;

  return (
    <div>
      <h3>{pokemon.name}</h3>
    </div>
  )
}

export default Pokemon;