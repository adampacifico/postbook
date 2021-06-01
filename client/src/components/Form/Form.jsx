import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FileBase from "react-file-base64";

import { useSelector, useDispatch } from "react-redux";
import { createPost, updatePost } from "../../redux/actions/postsActions";

const Form = ({ setCurrentId, currentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: [""],
    selectedFile: "",
  });

  const post = useSelector((state) =>
    currentId
      ? state.postsReducer.find((message) => message._id === currentId)
      : null
  );

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(postData);

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }

    clear();
  };

  useEffect(() => {
    if (post) setPostData(post);
  }, [currentId, post]);

  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: [""],
      selectedFile: "",
    });
  };
  return (
    <Container onSubmit={handleSubmit}>
      <Title>{currentId ? "Edit Post" : "Create Post"}</Title>
      <FormGroup>
        <p>title :</p>
        <input
          required
          type="text"
          name="title"
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          value={postData.title}
        />
      </FormGroup>
      <FormGroup>
        <p>Message :</p>
        <input
          required
          type="text"
          name="message"
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
          value={postData.message}
        />
      </FormGroup>
      <FormGroup>
        <p>creator :</p>
        <input
          required
          type="text"
          name="creator"
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
          value={postData.creator}
        />
      </FormGroup>
      <FormGroup>
        <p>tags :</p>
        <input
          required
          placeholder="tag1,tag2"
          type="text"
          name="tags"
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
          value={postData.tags}
        />
      </FormGroup>
      <FormGroup>
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) =>
            setPostData({ ...postData, selectedFile: base64 })
          }
        />
      </FormGroup>
      <FormGroup>
        <input type="submit" />
      </FormGroup>
    </Container>
  );
};

const Container = styled.form`
  padding: 30px 15px;
  display: flex;
  flex-direction: column;
  min-width: 400px;
  border: 2px solid white;
  border-radius: 12px;
  height: fit-content;
  background-color: #efefef;
  color: #1b1b1b;
  margin-right: 10px;
  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 15px;
  p {
    font-size: 1.3rem;
  }
  input {
    width: 100%;
    padding: 5px;
    font-size: 1.2rem;
    border: 3px solid #1b1b1b;
    background-color: transparent;

    &:focus {
      border: none;
    }
  }
  input[type="submit"] {
    background-color: white;
    cursor: pointer;
    transition: 0.4s;
    &:hover {
      background-color: #0cafff;
      color: white;
    }
  }
`;
const Title = styled.h2`
  font-weight: 400;
  font-size: 2rem;
  text-align: center;
`;
export default Form;
