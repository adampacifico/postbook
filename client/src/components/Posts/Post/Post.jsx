import React from "react";
import styled from "styled-components";

import moment from "moment";
// import Moment from "react-moment";

import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../redux/actions/postsActions";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Image>
        <Controls>
          <p> {post.creator}</p>
          <i
            onClick={() => {
              setCurrentId(post._id);
            }}
            className="fa fa-ellipsis-v"
          ></i>
        </Controls>
        <img src={post.selectedFile} alt="" />
      </Image>
      <Content>
        <Details>
          <Title>
            <h3>{post.title}</h3>
            <span>{moment(post.createdAt).fromNow()}</span>
          </Title>
          {post.tags.map((tag) => (
            <span key={Math.floor(Math.random() * 10000)} className="tag">
              {"#" + tag + " "}
            </span>
          ))}
          <p>{post.message}</p>
        </Details>

        <Bottom>
          <div
            onClick={() => {
              dispatch(likePost(post._id));
            }}
          >
            <i className="fa fa-thumbs-up"></i>
            <span>like ({post.likeCount})</span>
          </div>
          <div
            onClick={() => {
              dispatch(deletePost(post._id));
            }}
          >
            <i className="fa fa-trash"></i>
            <span>delete</span>
          </div>
        </Bottom>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  margin: 40px auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 8px 15px 2px rgba(63, 62, 62, 0.5);
  background-color: #efefef;
  color: #1b1b1b;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 2px;
  }
`;

const Content = styled.div`
  padding: 5px 10px 0;
  z-index: 2;
  border-top: 1px solid #1b1b1b;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 0.7rem;
  }
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 8px 3px;
  i {
    padding-right: 5px;
    transition: 0.3s;
  }
  div {
    cursor: pointer;

    &:hover {
      i {
        transform: translateY(-3px);
      }
    }
  }
  .fa-thumbs-up {
    color: #0cafff;
  }
  .fa-trash {
    color: red;
  }
`;

const Details = styled.div`
  position: relative;
  width: 100%;
  .tag {
    margin-bottom: 7px;
    color: #0cafff;
    font-size: 0.8rem;
  }
  p {
    padding: 8px 0;
    line-height: 1.5;
    font-size: 1.2rem;
  }
`;
const Controls = styled.div`
  position: absolute;
  top: 0;
  padding: 12px;
  transition: 0.4s;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  color: white;
  z-index: 100000;
  opacity: 0;
  p {
    font-weight: 600;
    font-size: 1.2rem;
    letter-spacing: 1.5px;
  }
  i {
    font-size: 1.2rem;
  }
`;

const Image = styled.div`
  position: relative;
  z-index: 2;
  cursor: pointer;
  min-height: 50px;
  img {
    width: 100%;
    object-fit: contain;
    z-index: -1000;
  }

  &:after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 2;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.3s;
  }
  &:hover {
    &:after {
      opacity: 1;
    }
    ${Controls} {
      opacity: 1;
    }
  }
`;

export default Post;
