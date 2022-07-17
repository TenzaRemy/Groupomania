import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { BsFillTrashFill } from 'react-icons/bs';
import { AiTwotoneEdit } from 'react-icons/ai';
import { AiFillLike } from 'react-icons/ai';
import { AiFillDislike } from 'react-icons/ai';

const Title = styled.h2`
    padding: 10px 50px 0 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 3px dashed ${colors.tertiary};
    @media only screen and (max-width: 768px) {
        font-size: 22px;
        padding: 10px 20px 0 20px;
      }
`
const BlocPost = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto auto 10px auto;
    width: 65%;
    justify-content: center;
    background-color: #bebebe;
    border-radius: 20px 0 0 20px;
    box-shadow: 2px 3px 3px 2px ${colors.tertiary};

    @media only screen and (max-width: 768px) {
    margin: auto;
    width: 97%;
  }
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
    padding: 5px 5px 0 5px;
`
const Icons = styled.div`
    display: flex;
    justify-content: end;
    align-items: end;
    background: none;
    font-size: 24px;
    color: ${colors.primary};
    opacity: 0.8;
`
const Modify = styled.i`
    cursor: pointer;
    margin-right: 30px;
    font-size: 25px;
`
const Supprimer = styled.i`
    cursor: pointer;
    margin-right: 30px;
`
const Like = styled.i`
    cursor: pointer;
    margin-right: 30px;
`
const Dislike = styled.i`
    cursor: pointer;
    margin-right: 30px;
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


    const handleDelete = (postId) => {
        console.log(postId);
    
        axios
          .delete(`http://localhost:5000/api/blog/` + postId)
          .then((res) => {
             console.log(res);
            getData();
          })
          .catch((err) => {
            console.log(err);
          });
      }; 


    return (
        <BlocPost>
        {posts.slice(0,4).map((post) => (
            <div>
                <Title>{post.title}</Title>
                <Message>{post.message}</Message>
                <Author>Publié par {post.Pseudo}</Author>
                <Icons>
                <Like><AiFillLike/>1</Like>
                <Dislike><AiFillDislike/>1</Dislike>
                <Modify><AiTwotoneEdit/></Modify>
                <Supprimer onClick={() => handleDelete(post.id)}><BsFillTrashFill/></Supprimer>
                </Icons>
            </div>
        ))}
        
      </BlocPost>
    )
};

export default PostRead