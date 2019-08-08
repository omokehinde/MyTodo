import React, { Component } from 'react';
import uuid from 'uuid';
import Header from './components/layout/header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';

class App extends Component {
    state = {
            todos: [{
                    id: uuid.v4(),
                    title: 'Take out to the trash',
                    completed: false
                },
                {
                    id: uuid.v4(),
                    title: 'Take a walk',
                    completed: false
                },
                {
                    id: uuid.v4(),
                    title: 'Eat out with Moyo',
                    completed: false
                }
            ]
        }
        // Toggle complete
    markComplete = (id) => {
            this.setState({
                todos: this.state.todos.map(todo => {
                    if (todo.id === id) {
                        todo.completed = !todo.completed
                    }
                    return todo;
                })
            });
        }
        // Delete a todo item
    delTodo = (id) => {
            this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
        }
        // Add aTodo
    addTodo = (title) => {
        const newTodo = {
            id: uuid.v4(),
            title,
            completed: false
        }
        this.setState({ todos: [...this.state.todos, newTodo] });
    }

    render() {
        return ( <
            div className = "App" >
            <
            div className = 'container' >
            <
            Header / >
            <
            AddTodo addTodo = { this.addTodo }
            /> <
            Todos todos = { this.state.todos }
            markComplete = { this.markComplete }
            delTodo = { this.delTodo }
            / > < /
            div > <
            /div>
        );
    }
}

export default App;
