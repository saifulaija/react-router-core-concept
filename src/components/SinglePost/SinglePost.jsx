import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SinglePost.css'

const SinglePost = ({post}) => {
            const {id, title}=post;
            const navigate = useNavigate();
            const showDetails =()=>{
                navigate(`/post/${id}`)
            }

            
    return (
        <div className='post'>
            <h3>users Id No : 00{id}</h3>
            <h5>{title}</h5>
            <Link to ={`/post/${id}`}>Show Details</Link>
            <Link to ={`/post/${id}`}> <button>Show Details Person</button> </Link>
            <button onClick={showDetails}>Show Details With Id</button>
             
        </div>
    );
};

export default SinglePost;