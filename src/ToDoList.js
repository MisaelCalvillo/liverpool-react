import React from 'react';
import shortid from 'shortid';

class ToDoList extends React.Component {

  state = {
    list: [
      {
        id: shortid.generate(),
        message: 'Lavar la ropa',
        completed: true
      },
      {
        id: shortid.generate(),
        message: 'Hacel la comida',
        completed: false
      }
    ],
    inputValue: ''
  }

  handleInput = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  addTodo = () => {
    const newList = [...this.state.list];
    newList.push({
      id: shortid.generate(),
      message: this.state.inputValue,
      completed: false
    })
    this.setState({ list: newList });
  }

  toggleTask = (id) => {
    this.setState((prevState) => {
      return ({
        list: prevState.list.map((todo) => {
          if(todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed
            }
          } else {
            return todo;
          }
        }) 
      })
    })
  }

  render() {
    console.log(this.state.list);
    return (
      <div>
        <div>
          <input 
            type="text" 
            value={this.state.inputValue}
            onChange={this.handleInput}
          />
          <button
            onClick={this.addTodo}
          >GUARDAR</button>
        </div>
        <div>
          {this.state.list.map((todo, i) => {
            return (
              <p 
              key={`todos_${i}`} 
              style={{  textDecoration: todo.completed ? "line-through": ""}}
              onClick={() => this.toggleTask(todo.id)}
              >{todo.message}</p>);
          })}
        </div>
      </div>
    ) 
  }
}

export default ToDoList;