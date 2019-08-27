import React from 'react';
import axios from 'axios';

import Planet from '../Planet';

class Lista extends React.Component {

  state = {
    selectedPlanet: null
  }


  componentDidMount() {
    axios.get('https://swapi.co/api/planets/1/')
    .then((response) => {
      this.setState({
        selectedPlanet: response.data
      });
    })
    .catch((error) => console.error(error))
  }

  render() {
    return (
      <div>
        
        <Planet planet={this.state.selectedPlanet}/>
      </div>
    )
  }
}

export default Lista;