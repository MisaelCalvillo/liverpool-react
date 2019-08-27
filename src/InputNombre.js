import React,  { Component } from 'react';

class InputNombre extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nombre: ''
    }
    console.log('CONSTRUCTOR');
  }

  componentWillMount() {
    console.log('COMPONENT WILL MOUNT');
  }

  componentDidMount() {
    console.log('COMPONNET DID MOUNT');
  }

  componentWillUpdate() {
    console.log('COMPONENT WILL UPDATE');
  }

  componentDidUpdate(){
    console.log('COMPONENT DID UPDATE');
  }


  manejarCambioDeNombre = (event) => {
    this.setState({
      nombre: event.target.value
    })
  }

  render() {

    console.log('RENDER')

    return (
      <div>
        <input 
          type="text"
          onChange={this.manejarCambioDeNombre}
        />
        <p>{this.state.nombre}</p>
      </div>
    )
  }
}

export default InputNombre;