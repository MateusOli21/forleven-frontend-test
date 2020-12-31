import { GET_USERS, GET_USERS_ERROR } from '../../types';
import api from '../../../services/api';

export const getUsers = () => async (dispatch) => {
    try {
        const response = await api.get('/users');

        dispatch({
            type: GET_USERS,
            payload: response.data,
        });
    } catch (err) {
        dispatch({
            type: GET_USERS_ERROR,
            payload: console.log(err),
        });
    }
};
