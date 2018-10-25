import React from 'react';

const TodoList = ({todos}) => { todos.map(todo => <p> {todo} </p>) }

export default TodoList

