import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const Formulaire = styled.div`
  border-radius: 20px;
  border: 2px solid ${colors.tertiary};
  box-shadow: 6px 7px 7px 6px ${colors.secondary};
  padding: 10px 10px 0;
  width: 50%;
  position: absolute;
		top: 30%;
		left: 25%;
`

const BlocForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  `

const FormTitle = styled.h1`
  display: flex;
  justify-content: center; 
`
const FormInput =  styled.input`
  padding: 5px;
  margin: 10px 0 15px 0;
  width: 297px;
`

const Show = styled.button`
  background-color: ${colors.secondary};
  height: 26px;
  width: 65px;
  margin: -43px 0 0 244px;
`

const FormValue = styled.label`
  width:
`

const Log = styled.button`
  border-radius: 20px;
  background: rgb(78,81,102);
  background: linear-gradient(160deg, rgba(78,81,102,1) 66%, rgba(255,215,215,1) 120%); 
  width: 20%;
  padding: 10px;
  margin: 40px 0 0 265px;;
 
  box-shadow: -1px 2px 2px 3px lightgray;
`

function Form() {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

    return (
      <Formulaire>
      <BlocForm method='post'>
        <FormTitle>Inscivez vous dès maintenant !</FormTitle>
          <FormValue htmlFor="Pseuso">Voter Pseudo</FormValue>
          <FormInput type="text" placeholder="Pseudonyme" name="pseudo" required/>
          <FormValue htmlFor="email">Email</FormValue>
          <FormInput type="text" placeholder="Email" name="email" required/>
          <FormValue htmlFor="password">Mot de Passe</FormValue>
          <FormInput type={passwordIsVisible ? 'text' : 'password'} placeholder="Mot de Passe" name="password" required/>
          <Show type="button" onClick={() => setPasswordIsVisible(!passwordIsVisible)}>Montrer</Show>
          <Log type="submit">Se connecter</Log>
      </BlocForm>
      </Formulaire>
    )
  }

  
export default Form