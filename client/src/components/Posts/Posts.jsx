import React from "react";
import Post from "./Post/Post";
import styled from "styled-components";
import Header from "../Header/Header";

import PulseLoader from "react-spinners/PulseLoader";
import { useSelector } from "react-redux";

const Posts = ({ currentId, setCurrentId }) => {
  const posts = useSelector((state) => state.postsReducer);

  return (
    <Container>
      <Header></Header>
      <Content>
        {!posts.length ? (
          <PulseLoader color={"#0cafff"} size={40} />
        ) : (
          <>
            {posts.map((post) => (
              <Post
                key={post._id}
                post={post}
                currentId={currentId}
                setCurrentId={setCurrentId}
              />
            ))}
          </>
        )}
      </Content>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  background-color: lightgray;
  @media (max-width: 768px) {
    margin: 15px 0;
  }
`;
const Content = styled.div`
  display: block;
  height: 90vh;
  overflow-y: scroll;
  width: 100%;
  @media (max-width: 768px) {
    height: 100vh;
  }
`;
export default Posts;
