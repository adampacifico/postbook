import * as api from "../../api";
import {FETCH, DELETE, UPDATE, LIKE, CREATE} from '../constants'
// action creators
// get all posts
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPost();

    dispatch({ type: FETCH, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// create post
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// update post
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// delete post
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

// like post
export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
