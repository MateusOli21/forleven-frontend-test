import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './styles.css';

const Todos = ({ children }) => {
    const location = useLocation();

    return (
        <div className="todos-container">
            <div className="todos-header">
                <h1>Todos</h1>
                <Link
                    to={location.pathname === '/' ? '/todos/1' : '/'}
                    className="link-button"
                >
                    {location.pathname === '/' ? (
                        <span>Ver todos</span>
                    ) : (
                        <span>Voltar</span>
                    )}
                </Link>
            </div>
            {children}
        </div>
    );
};

export default Todos;
