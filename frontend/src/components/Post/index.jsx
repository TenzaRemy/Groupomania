import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PostsRead = () => {

    const [posts, setPosts]= useState([]);
    const [user, setUser] = useState([]);

    const Posts = () => {

        axios.get(`http://localhost:5000/api/blog`)
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
          <Link to={`/post/${element.id}`}>Voir le post</Link>
        </div>
            ))}

        </div>
    );
};

export default PostsRead;