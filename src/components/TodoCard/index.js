import React from 'react';
import { useSelector } from 'react-redux';

import './styles.css';

const TodoCard = ({ todo }) => {
    const users = useSelector((state) => state.users.users);
    const todoOwner = users.find((user) => user.id === todo.userId);

    return (
        <div className="todo-container">
            <h2>{todo.title}</h2>
            <p>
                <strong>Responsável: </strong>
                {todoOwner && todoOwner.name}
            </p>
            <p>
                <strong>Completo: </strong>
                {todo.completed ? 'sim' : 'não'}
            </p>
        </div>
    );
};

export default TodoCard;
