import axios from "axios";

const url = "https://postbook-app.herokuapp.com/posts";
// const url = "http://localhost:3000/posts"

export const fetchPost = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likepost`);