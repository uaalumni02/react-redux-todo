import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoList from './TodoList/TodoList';
import AddTodo from './AddTodo/AddTodo';
import * as TodoActions from '../../actions/todoActions';

class Todos extends Component {
  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleCompleteTodo = this.handleCompleteTodo.bind(this);
  }

  handleKeyPress(event) {
    const currentKeyCode = event.which;
    const todo = event.target.value.trim();
    if (currentKeyCode === 13 && todo !== "") {
      this.props.actions.addTodo(todo);
      event.target.value = '';
    }
  }

  handleCompleteTodo(todo) {
    console.log("Getting here", todo);
    this.props.actions.completeTodo(todo);
  }

  render() {
    return (
      <div>
        <AddTodo 
          handleKeyPress={this.handleKeyPress}
        />
        <TodoList 
          todos={this.props.todos} 
          completed={this.props.completed}
          handleCompleteTodo={this.handleCompleteTodo}
          />
      </div>
    )
    
  }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos.todos,
        completed: state.todos.completed,
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
