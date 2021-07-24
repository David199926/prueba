import { combineReducers } from 'redux';
// reducers
import postsReducer from './posts/postsReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
    posts: postsReducer,
    user: userReducer,
});

export default rootReducer