import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList/TodoList';

class Todos extends Component {
  render() {
    return <TodoList todos={this.props.todos} />
  }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    }
}

export default connect(mapStateToProps)(Todos);
