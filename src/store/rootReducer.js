import { combineReducers } from 'redux';

import usersReducer from './modules/users/reducer';

const rootReducers = combineReducers({
    users: usersReducer,
});

export default rootReducers;
