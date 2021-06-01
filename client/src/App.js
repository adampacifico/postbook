import "./App.css";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import styled from "styled-components";

import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

// actions
import { getPosts } from "./redux/actions/postsActions";

function App() {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId]);

  return (
    <Container>
      <Contents>
        <Form setCurrentId={setCurrentId} currentId={currentId} />
        <Posts setCurrentId={setCurrentId} />
      </Contents>
    </Container>
  );
}

const Contents = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: block;
  }
`;
const Container = styled.div`
  width: 80%;
  margin: 10px auto;
  background-color: transparent;

  @media (max-width: 1024px) {
    width: 100%;
    margin: 0;
    padding: 15px;
    overflow-x: hidden;
  }
`;
export default App;
