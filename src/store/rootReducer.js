import { combineReducers } from 'redux';

import usersReducer from './modules/users/reducer';
import todosReducer from './modules/todos/reducer';

const rootReducers = combineReducers({
    users: usersReducer,
    todos: todosReducer,
});

export default rootReducers;
