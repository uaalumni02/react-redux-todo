import { createStore } from 'redux';
import rootReducer from '../reducers';


//  the store holds the entire state tree of the app. Holds all of the data
const store = createStore(rootReducer);

export default store;
