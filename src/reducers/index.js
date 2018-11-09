import { combineReducers } from 'redux';
import todos from './todoReducer';

//combineReducers is used to combine multiple reducers

const rootReducer = combineReducers({
    todos,
});

//exporting the rootReducer
export default rootReducer;
