import { GET_TODO, GET_TODOS } from '../../types';

const initialState = {
    todos: [],
    firstTodo: null,
    loading: true,
};

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODO:
            return {
                ...state,
                firstTodo: action.payload,
                loading: false,
            };

        case GET_TODOS:
            return {
                ...state,
                todos: action.payload,
                loading: false,
            };

        default:
            return state;
    }
};

export default todosReducer;
