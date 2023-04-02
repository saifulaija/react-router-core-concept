
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePost from '../SinglePost/SinglePost';
import './posts.css'

const Posts = () => {
    const posts = useLoaderData();
     console.log(posts);
    return (
        <div>
            <h3>There are <span style={{color: 'red', fontWeight:'bold'}}>{posts.length}</span> here</h3>
            <div className='posts'>
                {
                    posts.map(post=><SinglePost post={post} key={post.id}></SinglePost>)
                }
            </div>
        </div>
    );
};

export default Posts;