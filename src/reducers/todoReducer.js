import * as types from '../actions/actionTypes';
import initialState from './initialState';

const todoReducer = (state = initialState.todos, action) => {
    switch(action.type) {
        case types.ADD_TODO:
            const todos = state.todos.filter(val => val);
            todos.push(action.todo);
            return {
                ...state,
                todos,
            }
        case types.COMPLETE_TODO:
            const completed = [...state.completed];
            completed.push(action.todo);
            return {
                ...state,
                completed,
            }

        default:
            return state;
    }
    return state;
}

export default todoReducer;