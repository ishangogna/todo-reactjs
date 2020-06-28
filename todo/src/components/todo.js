import React from 'react';

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className = 'collection-item' key = {todo.id}>
                    <span>{todo.content}</span>
                    <button onClick={()=>{deleteTodo(todo.id)}}>Delete</button>
                </div>
            )
        })
    ) : (
        <p className = 'center'>Yay! No todos left!</p>
    )
    return(
        <div>
            <h1 className = "blue-text center">Todo.js</h1>
            <div className = 'todos collection'>
            {todoList}
            </div>
        </div>
    )
}

export default Todos;
