
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';
import './Friends.css'

const Friends = () => {
    const friends = useLoaderData()
    
    return (
        <div>
            <h2>This is my  Friend List : {friends.length}</h2>
            <div className='friends'> 
                {
                    friends.map(friend => <Friend friend={friend} key={friend.id}></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;