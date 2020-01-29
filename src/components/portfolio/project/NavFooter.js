import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const NavFooter = ({previousProject, nextProject}) => {

  return (
    <Container>
    {
      previousProject !== undefined ? 
      <Link to={'/portfolio/' + previousProject.path}>
        <NavItem>
        <div>
            <p>&larr;</p>
        </div>
        <section>
            <p>Previous Project</p>
            <h3>{previousProject.name}</h3>
          </section>
        </NavItem>
      </Link>
      :
      <div></div>
    }
    {
      nextProject !== undefined ?
      <Link to={'/portfolio/' + nextProject.path}>
      <NavItem>
          <section>
            <p style={{textAlign: 'right'}}>Next Project</p>
            <h3>{nextProject.name}</h3>
          </section>
          <div>
            <p>&rarr;</p>
          </div>
        </NavItem>
      </Link>
      :
      <div></div>
    }
    </Container>
  );
};

export default NavFooter;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 80px;
  a {
    text-decoration: none;
    color: #324955; 
  }
  @media (max-width: 765px) {
    margin: 50px 20px;
  }
`;

const NavItem = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 15px;
  section {
    display: grid;
    grid-template-rows: auto auto;
  }
  div {
    align-items: center;
    font-size: 25px;
  }
  p, h3 {
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  h3 {
    font-size: 25px;
  }
  
  @media (max-width: 750px) {
    h3 {
      font-size: 20px;
    }
  }
  @media (max-width: 600px) {
    p {
      font-size: 14px;
    }
    h3 {
      font-size: 18px;
    }
  }
  @media (max-width: 565px) {
    h3 {
      display: none;
    }
  }
`;