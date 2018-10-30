import React from 'react';

const TodoList = ({todos, completed, handleCompleteTodo}) => {
    console.log(todos, completed);
    
    return todos.map(todo => {
        if (completed.includes(todo)) {
            return <p key={todo} style={{cursor: 'not-allowed',textDecoration: 'line-through'}}>{todo}</p>
        } else {
            return <p key={todo} style={{cursor: 'pointer'}} onClick={() => handleCompleteTodo(todo)}>{todo}</p>
        }
    });

} 

export default TodoList

