import * as types from '../actions/actionTypes';
import initialState from './initialState';

//reducers are used to update the state

// todoReducer takes the state which is set equal to the intial state, also takes action as a prop

// Uses the filter method to create an array object if a certain test is passed; the .push method is used to add new values to the array. 
//the state is returned using the spread operator, so that the original state is not manipulated
const todoReducer = (state = initialState.todos, action) => {
    switch(action.type) {
        case types.ADD_TODO: {
            const todos = state.todos.filter(val => val);
            todos.push(action.todo);
            return {
                ...state,
                todos,
            }
        }
        //??
        case types.COMPLETE_TODO: {
            const completed = [...state.completed];
            completed.push(action.todo);
            return {
                ...state,
                completed,
            }
        }
        //Delete_TODO action removes todos by not manipulating the original state using the spread operator. uses splice to remove objects from the array based on the index
        case types.DELETE_TODO: {
            const todos = [...state.todos];
            todos.splice(action.index, 1);
            return {
                ...state,
                todos,
            }
        }

        default:
            return state;
    }
    return state;
}

export default todoReducer;