import React from 'react';

const AddTodo = (props) => (
    <div>
        <label htmlFor="addTodo"> Add Task </label> <br />
        <input 
            id="addTodo"
            type="text" 
            placeholder="Task"
            onKeyUp={props.handleKeyPress}
            />
    </div>
);

export default AddTodo;