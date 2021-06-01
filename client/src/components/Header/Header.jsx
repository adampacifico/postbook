import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <Container>
      <h1>
        POSTBOOK <i className="fa fa-book-reader"></i>
      </h1>
    </Container>
  );
};
const Container = styled.div`
  height: 60px;
  background-color: #0cafff;
  padding-left: 45px;
  color: #efefef;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 2.5px;
  @media (max-width: 425px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

export default Header;
