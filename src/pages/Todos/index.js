import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getFirstTodo, getTodosList } from '../../store/modules/todos/action';
import TodosContainer from '../../components/Todos';
import TodoCard from '../../components/TodoCard';
import PaginationLinks from '../../components/PaginationLinks';

const Todos = () => {
    const dispatch = useDispatch();
    const todosState = useSelector((state) => state.todos);

    useEffect(() => {
        dispatch(getTodosList());
        dispatch(getFirstTodo());
    }, [dispatch]);

    const [pageItems, setPageItems] = useState(null);
    const { page } = useParams();
    const limitItems = 20;
    const totalPages = Math.ceil(todosState.todos.length / limitItems);

    useEffect(() => {
        function listPageItems() {
            let result = [];
            let count = page * limitItems - limitItems;
            let delimiter = count + limitItems;

            if (page <= totalPages) {
                for (let index = count; index < delimiter; index++) {
                    if (todosState.todos[index] !== null) {
                        result.push(todosState.todos[index]);
                    }
                    count++;
                }
            }

            setPageItems(result);
        }

        listPageItems();
    }, [todosState.todos, totalPages, page]);

    while (todosState.loading)
        return <h1 className="loading">Carregando...</h1>;

    return (
        <div className="container">
            <div className="content">
                <TodosContainer>
                    {pageItems &&
                        pageItems.map((item) => (
                            <TodoCard key={item.id} todo={item} />
                        ))}
                </TodosContainer>

                <PaginationLinks totalPages={totalPages} />
            </div>
        </div>
    );
};

export default Todos;
