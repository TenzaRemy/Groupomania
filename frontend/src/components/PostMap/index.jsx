import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PostsRead = () => {

    const [posts, setPosts]= useState([]);

    const Posts = () => {

        axios.get(`localhost:5000/api/blog`)
        .then ((res) =>{
            setPosts(res.data.post)
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect (() => {
        Posts();
    }, [])

    return (
        
        <div>
            <h1> Les posts</h1>
            {posts.map((element) => (
        <div className="post">
          <em>{element.user.firstName} {element.user.lastName}</em>
          <p>{element.content} {element.date}</p>
        </div>
            ))}

        </div>
    );
};

export default PostsRead;