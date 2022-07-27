import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';


export const signin = (formData , navigate ) => async (dispatch) => {
  try {

    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    navigate('/posts');

  } catch (error) {
   alert ( "Vérifier votre adresse Mail et/ou Mot de Passe" ) ;
    console.log(error.message);
  }
};

export const signup = (formData , navigate ) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    navigate('/posts');

  } catch (error) {
   alert ( "Vérifier vos données saisies. Inscription impossible" ) ;
    console.log(error.message);
  }
};
