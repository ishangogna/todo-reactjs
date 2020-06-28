import React, { Component } from 'react';
import Todos from './components/todo';
import AddTodos from './components/addTodo'
class App extends Component{
  state = {
    todos: [
      {id:1,content:'Buy milk'},
      {id:2,content:'Do some react coding'}
    ]
  }
  render(){
    return(
      <div className = "App">
        <h1>Hello. This is a todo app.</h1>

        <Todos todos = {this.state.todos}/>

        <AddTodos />
      </div>
    )
  }
}

export default App;