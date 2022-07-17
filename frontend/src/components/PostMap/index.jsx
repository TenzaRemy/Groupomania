import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const Title = styled.h2`
    padding: 10px 50px 0 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 3px dashed ${colors.tertiary};
`
const BlocPost = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 300px 0 300px;
    background-color: #bebebe;
    border-radius: 20px 0 0 20px;
    box-shadow: 2px 3px 3px 2px ${colors.tertiary};
    `

const Message = styled.p`
    margin: 4px;
    padding: 10px;
    border-radius: 10px 0 0 10px;
    background-color: ${colors.secondary};
`

const Author = styled.p`
    display: flex;
    justify-content; end;
    padding: 5px;
`

function PostRead() {

    const [posts, setPosts] = useState([]);

    const getData = () => {
        axios.get('http://localhost:5000/api/blog')
            .then(res => {
                setPosts(res.data);
                console.log(res.data);
            })
            .catch(error => {
                console.log(error)
            })
    };


    useEffect(() => {
        getData();
    }, []);



    return (
        <BlocPost>
        {posts.map((post) => (
            <div key={post.id}>
                <Title>{post.title}</Title>
                <Message>{post.message}</Message>
                <Author>Publié par {post.Pseudo}</Author>
            </div>
        ))}
        
      </BlocPost>
    )
};

export default PostRead