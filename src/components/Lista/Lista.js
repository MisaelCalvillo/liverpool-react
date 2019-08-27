import React from 'react';
import axios from 'axios';

import './Lista.css';
import Pokemon from '../Pokemon';

class Lista extends React.Component {

  state = {
    selectedPokemon: null
  }


  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto/')
    .then((response) => {
      this.setState({
        selectedPokemon: response.data
      });
    })
    .catch((error) => console.error(error))
  }

  render() {
    return (
      <div className="Lista">
        
        <Pokemon pokemon={this.state.selectedPokemon}/>
      </div>
    )
  }
}

export default Lista;