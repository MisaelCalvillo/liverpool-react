import React from 'react';

import './Pokemon.css';

function Pokemon({ pokemon }) {

  if (!pokemon) return null;

  return (
    <div className="Pokemon">
      <h3>{pokemon.name}</h3>
    </div>
  )
}

export default Pokemon;