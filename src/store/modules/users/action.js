import { GET_USERS, GET_USERS_ERROR } from '../../types';
import axios from 'axios';

export const getUsers = () => async (dispatch) => {
    try {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/users'
        );

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
