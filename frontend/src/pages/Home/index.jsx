import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import Header from '../../components/Header';

const Formulaire = styled.div`
  border-radius: 20px;
  border: 2px solid ${colors.tertiary};
  box-shadow: 6px 7px 7px 6px ${colors.secondary};
  padding: 10px 10px 0;
  width: 50%;
  position: absolute;
		top: 27%;
		left: 25%;
    background-color: ${colors.secondary};
`

const BlocForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  `

const FormTitle = styled.h1`
  display: flex;
  justify-content: center; 
`
const FormInput =  styled.input`
  padding: 5px;
  margin: 10px 0 15px 0;
  width: 250px;
  border-radius: 10px;
  background-color: #f5f5f5;
`

const Show = styled.button`
  background-color: ${colors.secondary};
  height: 25px;
  width: 65px;
  margin: -43px 0 0 193px;
  border-radius: 10px;
`

const FormValue = styled.label`
  font-weight: 600;
`

const Log = styled.button`
  border-radius: 20px;
  background: rgb(78,81,102);
  background: linear-gradient(160deg, rgba(78,81,102,1) 66%, rgba(255,215,215,1) 120%); 
  width: 33%;
  padding: 10px;
  margin: 40px 0 0 0;
  box-shadow: -1px 2px 2px 3px lightgray;
  display: flex;
  justify-content: center;
  align-self: center;
  font-size: 18px;
  font-weight: 600;
`

function Login() {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  
  const [userLogin, setUserLogin] = useState({
    email:'',
    password:'',    
  });


  const handleEmailChange = (event) => {
    setUserLogin({...userLogin, email: event.target.value });
  }

  const handlePasswordChange = (event) => {
    setUserLogin({...userLogin, password: event.target.value });
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

  fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userLogin),
  })
  .then(function (res) {
    if (res.status === 401) {
      alert(
        'Connexion invalide veuillez vérifier votre email et votre mot de passe.'
      )
    } else {
      alert(
        'Bienvenue sur Groupomania ',
        window.location ="/Blog"
      )
    }
  })
  .catch(function (err) {
    console.log(err)
  })
}
    return (
      <div>
        <Header></Header>
        <Formulaire onSubmit={formSubmitHandler}>
        <BlocForm>
          <FormTitle>Connectez vous dès maintenant !</FormTitle>
            <FormValue htmlFor="email">- Email -</FormValue>
            <FormInput type="text" placeholder="Email"  onChange={handleEmailChange} required/>
            <FormValue htmlFor="password">- Mot de Passe -</FormValue>
            <FormInput type={passwordIsVisible ? 'text' : 'password'} placeholder="Mot de Passe" onChange={handlePasswordChange} required/>
            <Show type="button" onClick={() => setPasswordIsVisible(!passwordIsVisible)}>Montrer</Show>
            <Log type="submit">Se connecter</Log>
        </BlocForm>
        </Formulaire>
      </div>
    )
  }

  
export default Login