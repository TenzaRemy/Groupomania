import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
    window.location.href = '/posts';
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = ( post) => async (dispatch) => {

   console.log ( post ) ;
  try {
    const id = post._id ;
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });

  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id ) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('profile'));

  try {
    const { data } = await api.likePost(id, user );
    dispatch({ type: LIKE, payload: data });

  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
