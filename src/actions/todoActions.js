import * as types from './actionTypes';

export const addTodo = (todo) => {
    return {
        type: types.ADD_TODO,
        todo,
    }
}


export const completeTodo = (todo) => {
    return {
        type: types.COMPLETE_TODO,
        todo,
    }
}