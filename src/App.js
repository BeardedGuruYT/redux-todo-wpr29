import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addTodo } from './ducks/todos';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind( this );
    this.handleClick = this.handleClick.bind( this );
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleClick() {
    this.props.newTodo( this.state.inputValue );
    this.setState({
      inputValue: ''
    })
  }

  render() {
    let todos = this.props.todos.map( (todo, i) => {
      return <p key={ i }>{ todo }</p>
    })
    return (
      <div className="App">
        <h1>To-Do List:</h1>
        <input 
          onChange={ this.handleChange }
          value={ this.state.inputValue }
          placeholder='Type a new todo...' />
        <button 
          onClick={ this.handleClick }
          type='' 
          className=''>ADD</button>
          { todos }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, { newTodo: addTodo })(App);
