import React from 'react';

function Planet({ planet }) {

  if (!planet) return null;

  return (
    <div>
      <h3>{planet.name}</h3>
    </div>
  )
}

export default Planet;