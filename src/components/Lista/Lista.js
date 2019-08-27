import React from 'react';
import axios from 'axios';

import './Lista.css';
import Pokemon from '../Pokemon';

class Lista extends React.Component {

  state = {
    selectedPokemon: null,
    list: []
  }


  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=50')
    .then((response) => {
      this.setState({
        list: response.data.results
      });
    })
    .catch((error) => console.error(error))
  }

  render() {
    return (
      <div className="Lista">
        
        {this.state.list.map((pokemon) => 
        <Pokemon 
          pokemon={pokemon}
          key={pokemon.name}
        />
        )}
        
      </div>
    )
  }
}

export default Lista;