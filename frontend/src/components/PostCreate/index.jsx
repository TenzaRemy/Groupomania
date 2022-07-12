import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import colors from "../../utils/style/colors";

const Message = styled.textarea`
    resize: none;
    width: 450px;
    height: 108px;
    border-radius: 10px;
    border 1px solid ${colors.tertiary};
    background-color: #e0e0e0;
    outline: none;
    padding: 3px;
`
const BlocForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
`
const Title = styled.input`
    width: 450px;
    height: 28px;
    font-size: 18px;
    border-radius: 10px;
    border 1px solid ${colors.tertiary};
    background-color: #e0e0e0;
    margin-bottom: 5px;
    outline: none;
    padding: 3px;
`
const Publish = styled.button`
    width: 100px;
    background-color: #e0e0e0;
`

function PostCreate() {

    const token = localStorage.getItem('token');

const [title, setTitle] = useState('');
const [message, setMessage] = useState('');

const formSubmitHandler = (event) => {
        event.preventDefault();
       
    axios.post('http://localhost:5000/api/blog', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        title,
        message,
    })
    .then ((res) =>{
          console.log(res);
          alert("Publication bien enregistrée. Merci pour votre participation !");
      })
      .catch ((err) => {
          console.log(err);
          alert("Votre publication ne s'est pas envoyé. Veuillez réessayer remplir les deux champs ou réessayer ultérieurement.");
      })
      }

return (
    <BlocForm onSubmit={formSubmitHandler}>
    <div> 
        <Title type="text" placeholder="Titre de votre publication" onChange={(event) => setTitle(event.target.value)} maxLength={42}/>
    </div>
    <div>
        <Message placeholder="Que souhaitez vous partager ? (240 caractères maximum)" onChange={(event) => setMessage(event.target.value)} maxLength={240}/>
    </div>
    
        <Publish type="submit">Publier</Publish>
    

</BlocForm>


    )
}

export default PostCreate