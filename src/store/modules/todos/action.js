import { GET_TODO, GET_TODOS, GET_TODO_ERROR } from '../../types';
import api from '../../../services/api';

export const getFirstTodo = () => async (dispatch) => {
    try {
        const response = await api.get('/todos/1');

        dispatch({
            type: GET_TODO,
            payload: response.data,
        });
    } catch (err) {
        dispatch({
            type: GET_TODO_ERROR,
            payload: console.log(err),
        });
    }
};

export const getTodosList = () => async (dispatch) => {
    try {
        const response = await api.get('/todos');

        dispatch({
            type: GET_TODOS,
            payload: response.data,
        });
    } catch (err) {
        dispatch({
            type: GET_TODO_ERROR,
            payload: console.log(err),
        });
    }
};
