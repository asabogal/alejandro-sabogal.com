import React from 'react';
import styled from 'styled-components';
import error from '../Images/error.png'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <Wrapper>
      <Container>
      <img src={error} alt='error'></img>
      <h1 className="message">Page not found!</h1>
      <p>Oops! You seem lost. You have found a broken link or entered a URL that doesn't exist on this site.</p>
      <Link to="/">Back to site</Link>
      </Container>
    </Wrapper>
  );
};

export default PageNotFound;

const Wrapper = styled.div`
  height: 100vh;
`;
  
const Container = styled.div`
  display: grid;
  justify-items: center;
  /* align-items: center; */
  padding-top: 50px;
  padding-left: 40px;
  padding-right: 40px;
  text-align: center;
`;