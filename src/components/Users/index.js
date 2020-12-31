import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsers } from '../../store/modules/users/action';
import UserCard from '../UserCard';

import './styles.css';

const Users = () => {
    const dispatch = useDispatch();
    const usersState = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    if (usersState.loading)
        return <h1 className="loading">Carregando usuários...</h1>;

    return (
        <div className="users-container">
            <h1>Usuários</h1>

            {usersState.users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
};

export default Users;
