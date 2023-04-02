
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './FriendsDetails.css'

const FriendDetails = () => {
    const friend = useLoaderData();
    console.log(friend);
    return (
        <div className='details'>
            <h4>Show the person details</h4>
            <h3>name : {friend.name}</h3>
            <h5>Email :{friend.email}</h5>
            <p>Company Address : {friend.company.bs}</p>
        </div>
    );
};

export default FriendDetails;