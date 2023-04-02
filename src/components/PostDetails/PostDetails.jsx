
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './PostDetails.css'

const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate()
    const handleGoBack =()=>{
            navigate(-1);
    }
     console.log(post);
    return (
        <div className='post'>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <h6>Id Number : 00{post.id}</h6>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;