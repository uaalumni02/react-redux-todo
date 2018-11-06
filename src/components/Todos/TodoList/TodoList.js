import React from 'react';
import './TodoList.css';

const TodoList = ({todos, completed, handleCompleteTodo, handleDeleteTodo}) => {    
    return todos.map((todo, index) => {
        if (completed.includes(todo)) {
            return (
                <div className="Todo" key={todo}>
                    <span style={{cursor: 'not-allowed', textDecoration: 'line-through'}}>{todo}</span>
                    <button onClick={() => handleDeleteTodo(index)}> delete </button>
                </div>
            );
        } else {
            return (
                <div className="Todo" key={todo}>
                    <span style={{cursor: 'pointer'}} onClick={() => handleCompleteTodo(todo)}>{todo}</span>
                    <button onClick={() => handleDeleteTodo(index)}> delete </button>
                </div>
            );
        }
    });
} 

export default TodoList;

