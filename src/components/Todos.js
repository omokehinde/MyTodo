import React, { Component } from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';

class Todos extends Component {
    render() {
      return this.props.todos.map((todo)=>{
        return <Todoitem key={todo.id} todo={todo}
                markComplete={this.props.markComplete}
                delTodo={this.props.delTodo} />
      });
      // return <h1>{2+44}</h1>
    }
}

Todos.propTypes={
  todos: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

export default Todos;
