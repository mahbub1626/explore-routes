import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    console.log(friend);
    const {phone,name}=friend;
    return (
        <div>
            <h2>Friend Details info:</h2>
            <h3>{name}</h3>
            <p>Call him/her: {phone}</p>
        </div>
    );
};

export default FriendDetails;