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
  deleteTodo = (id) => {
    let updatedTodoList = this.state.todos.filter(todo => {
      return todo.id != id;
      
    })
    this.setState({
      todos: updatedTodoList,
    })
  }
  render(){
    return(
      <div className = "todo-app container">
       

        <Todos deleteTodo = {this.deleteTodo} todos = {this.state.todos}/>

        <AddTodos />
      </div>
    )
  }
}

export default App;