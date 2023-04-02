
import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name,username,email,phone,id} = friend;
    return (
        <div className='friend'>
            <h3>Name : {name}</h3>
            <h6>User Name : {username}</h6>
            <p>Phone : {phone}</p>
            <p>Email :{email}</p>
           <p><Link to={`/friend/${id}`}>Show Me Details</Link></p>

        </div>
    );
};

export default Friend;