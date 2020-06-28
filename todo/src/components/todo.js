import React from 'react';

const Todos = ({todos}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className = 'collection-item' key = {todo.id}>
                    <span>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className = 'center'>Yay! No todos left!</p>
    )
    return(
        <div>
            <h1 className = "center blue">Todo.js</h1>
            <div className = 'collection-item'>
            {todoList}
            </div>
        </div>
    )
}

export default Todos;
