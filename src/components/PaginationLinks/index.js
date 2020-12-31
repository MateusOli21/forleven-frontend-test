import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const PaginationLinks = ({ totalPages }) => {
    const pagesLinks = [];
    for (let i = 1; i <= totalPages; i++) {
        pagesLinks.push(
            <Link key={i} to={`/todos/${i}`}>
                {i}
            </Link>
        );
    }

    return <div className="pagination">{pagesLinks}</div>;
};

export default PaginationLinks;
