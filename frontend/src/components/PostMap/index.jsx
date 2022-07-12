import axios from 'axios';
import React, { useEffect, useState } from 'react';


function PostRead() {

    const [post, setPost] = useState([]);
    

const getData = () => {     
    axios.get('http://localhost:5000/api/blog')
    .then ((res) =>{
        setPost(res.data)
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })
}

useEffect(() => {   
    getData()
}, []);



    return (
        
         
        <div>
      {post}Contenu

    </div>
        
    );
};

export default PostRead