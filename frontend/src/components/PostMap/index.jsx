import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const Title = styled.h2`
    border: 1px solid black;
    padding: 0 50px 0 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const BlocPost = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 300px 0 300px;
    background-color: ${colors.tertiary};
    border-radius: 20px 0 0 20px;
    border: thick double ${colors.tertiary};
    `

const Message = styled.p`
    border: 1px solid black;
    padding: 10px;
`

const Author = styled.p`
    display: flex;
    justify-content; end;
    border: 1px solid red;
    padding: 5px;
`

function PostRead() {

    const [data, setData] = useState([]);

    const getData = () => {
     axios.get('http://localhost:5000/api/blog')
            .then(res => {
                setData(res.blog);
                console.log(res);
            })
            .catch(error => {
                console.log(error)
            })
    };


    useEffect(() => {
        getData();
    }, []);



<div>
  {data.map((element) => {
    return (
        <BlocPost>
      <Title key={element.id}></Title>
        <Author>{element.pseudo}</Author>
        <Message>{element.message}</Message>
        
      </BlocPost>
    )
  })}
</div>

};

export default PostRead