import { createStore } from 'redux';
// reducers
import postsReducer from './posts/postsReducer';

// Store
const store = createStore(postsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;