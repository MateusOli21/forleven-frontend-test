import React from 'react';

import './styles.css';

const UserCard = ({ user }) => {
    return (
        <div className="card-container">
            <p>
                <strong>Nome: </strong> {user.name}
            </p>
            <p>
                <strong>E-mail: </strong> {user.email}
            </p>
        </div>
    );
};

export default UserCard;
