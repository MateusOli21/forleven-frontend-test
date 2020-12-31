import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getFirstTodo } from '../../store/modules/todos/action';
import TodoCard from '../TodoCard';

import './styles.css';

const Todo = () => {
    const dispatch = useDispatch();
    const todosState = useSelector((state) => state.todos);

    useEffect(() => {
        dispatch(getFirstTodo());
    }, [dispatch]);

    if (todosState.loading) return <h1>Carregando...</h1>;

    return (
        <div className="todos-container">
            <h1>Todo</h1>

            <TodoCard todo={todosState.firstTodo} />
        </div>
    );
};

export default Todo;
