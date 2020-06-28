import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content : '',
        id : '',
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        
    }
    render(){
        return(
            <div className = "AddTodo">
                <h1 className = 'center blue-text'>Add a todo</h1>
                <form onSubmit = {this.handleSubmit}>
                    <input onChange = {this.handleChange} id= 'task' placeholder = "Add a todo.." />
                </form>
            </div>
        )
    }
}

export default AddTodo;
