import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Message = styled.textarea`
    resize: none;
    width: 450px;
    height: 96px;
`
const BlocForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
`
const Title = styled.input`
    width: 450px;
    height: 24px;
`

function PostCreate() {

    let user = JSON.parse(localStorage.getItem("userdata"));

const [title, setTitle] = useState('');
const [message, setMessage] = useState('');

const formSubmitHandler = (event) => {
        event.preventDefault();
       
    axios.post('http://localhost:5000/api/blog', {
        headers: {
            authorization: user.token
        },
        title,
        message,
    })
    .then ((res) =>{
          console.log(res);
      })
      .catch ((err) => {
          console.log(err);
          alert("Votre publication ne s'est pas envoyé. Veuillez réessayer ultérieurement.");
      })
      }

return (
    <BlocForm onSubmit={formSubmitHandler}>
    <div> 
        <Title type="text" placeholder="Titre de votre publication" onChange={(event) => setTitle(event.target.value)} maxLength={42}/>
    </div>
    <div>
        <Message placeholder="Que souhaitez vous partager ? (240 caractères maximum)" onChange={(event) => setMessage(event.target.value)} maxLength={240}></Message>
    </div>
    <div>
        <button type="submit">Publier</button>
    </div>

</BlocForm>


    )
}

export default PostCreate