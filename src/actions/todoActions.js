import * as types from './actionTypes';

//actions are payloads of data that are sent to the store. Actions are JS objects. They must include a Type. Types are defined as strings...see actionTypes.js 
//below we have 3 action creators. These are functions that create the action


// expporting the addTodo function passing in todo as a prop; returning the ADD_TODO action
export const addTodo = (todo) => {
    return {
        type: types.ADD_TODO,
        todo,
    }
}
// exporting the completeTodo function passing in todo as a prop; returning the COMPLETE_TODO action
export const completeTodo = (todo) => {
    return {
        type: types.COMPLETE_TODO,
        todo,
    }
}
//exporting the deleTODO function passing in index as a prop returning the DELETE_TODO action
export const deleteTodo = (index) => {
    return {
        type: types.DELETE_TODO,
        index,
    }
}