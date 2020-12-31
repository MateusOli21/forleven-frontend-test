import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getFirstTodo } from '../../store/modules/todos/action';
import Todos from '../../components/Todos';
import Users from '../../components/Users';
import TodoCard from '../../components/TodoCard';

const Home = () => {
    const dispatch = useDispatch();
    const todosState = useSelector((state) => state.todos);

    useEffect(() => {
        dispatch(getFirstTodo());
    }, [dispatch]);

    while (todosState.loading)
        return <h1 className="loading">Carregando...</h1>;

    return (
        <div className="container">
            <div className="content">
                <Todos>
                    <TodoCard todo={todosState.firstTodo} />
                </Todos>
                <Users />
            </div>
        </div>
    );
};

export default Home;
