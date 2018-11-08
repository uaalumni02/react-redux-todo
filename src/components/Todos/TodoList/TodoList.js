import React from 'react';
import './TodoList.css';

const Delete = ({index, handleDeleteTodo }) => {
    return  <button onClick={() => handleDeleteTodo(index)}> delete </button>
}

const TodoList = ({todos, completed, handleCompleteTodo, handleDeleteTodo}) => {    
    return todos.map((todo, index) => {
        if (completed.includes(todo)) {
            return (
                <div className="Todo" key={todo}>
                    <span style={{cursor: 'not-allowed', textDecoration: 'line-through'}}>{todo}</span>
                    <Delete 
                        index={index}
                        handleDeleteTodo={handleDeleteTodo}
                    />
                </div>
            );
        } else {
            return (
                <div className="Todo" key={todo}>
                    <span style={{cursor: 'pointer'}} onClick={() => handleCompleteTodo(todo)}>{todo}</span>
                    <Delete 
                        index={index}
                        handleDeleteTodo={handleDeleteTodo}
                    />
                </div>
            );
        }
    });
} 

export default TodoList;

