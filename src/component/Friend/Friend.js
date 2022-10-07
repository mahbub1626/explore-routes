import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = ({friend}) => {
    const {id,name,email,username}= friend;
    return (
        <div className='friend'>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>User Name: <Link to={`/friend/${id}`}>{username}</Link></p>
        </div>
    );
};

export default Friend;