import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();
    console.log(posts)

    return (
        <div>
            <h3>{posts.length}</h3>
            <p><small>Post text</small></p>
            {
                posts.map(post => <Post
                key={post.id}
                post={post}
                ></Post>)
            }
        </div>
    );
};

export default Posts;