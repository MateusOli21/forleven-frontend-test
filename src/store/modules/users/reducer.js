import { GET_USERS } from '../../types';

const intialState = {
    users: [],
    loading: true,
};

const usersReducer = (state = intialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            };

        default:
            return state;
    }
};

export default usersReducer;
