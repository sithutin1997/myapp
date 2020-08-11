import React, { Component } from 'react';
import TodoItems from '../TodoItems/TodoItem';
import Todoitem from '../TodoItems/TodoItem';
import Todoitems from '../TodoItems/TodoItem';

class Todos extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: "learn react"
            },
            {
                id:2,
                title: "prectice react"
            }
        ],
        todoTitle: ""
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    createNewTodo = e =>{
        const todos = [...this.state.todos];
        const id = todos.length ? todos[todos.length - 1].id+1 : 1;

        todos.push({ id, title : this.state.todoTitle});

        this.setState({ todos });

        this.state.todoTitle = ""
        
    }
    deleteTodo = id => {
        const todos = [...this.state.todos];
        this.setState({todos: todos.filter(todos => todos.id !== id)});
    }
    render = () => {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <input 
                style={{marginLeft: "4rem"}}
                type="text"
                name="todoTitle"
                value={this.state.todoTitle} 
                onChange={this.handleChange} />
                <button onClick={this.createNewTodo}>Save</button>
                <ul>
                    {this.state.todos.map(todo => (
                        <Todoitems title={todo.title} 
                        key={todo.id}
                        deleteTodo={this.deleteTodo}
                        id={todo.id}
                        />
                    ))}
                </ul>
            </div>
        );
    };
}
export default Todos;