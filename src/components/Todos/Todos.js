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
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
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

  handleDeleteTodo(index) {
    console.log('Getting here to delete');
    this.props.actions.deleteTodo(index);
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
          handleDeleteTodo={this.handleDeleteTodo}
          />
      </div>
    )
    
  }
}
//function called mapStateToProps takes the original state as a prop and returns an object contacts todos and completed. This determines if the state has changed.
//it pulls data from the store when it changes, and pass those values as props to your component; only for todos and completed
const mapStateToProps = (state) => {
    return {
        todos: state.todos.todos,
        completed: state.todos.completed,
    }
}

//mapDispatchToProps function takes dispatch as a prop and dispatches the actions as soon as they are called. 
const mapDispatchToProps = (dispatch) => {
  return {
    //pass the action down to the component 
    actions: bindActionCreators(TodoActions, dispatch)
  }
}
//exports mapStateToProps, mapDispatchToProps and Todos while calling connect
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
