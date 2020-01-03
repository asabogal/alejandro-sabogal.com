import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle} from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt} from '@fortawesome/free-solid-svg-icons';
import { faMedium } from '@fortawesome/free-brands-svg-icons';


const SideNavigation = () => {
  return (
    <Container>
      <div>
        <Link to="/">
          <FontAwesomeIcon
          icon={faHome}
          />HOME 
        </Link>
      </div>
      <div>
        <Link to="/about">
          <FontAwesomeIcon
          icon={faUserCircle}
          />
          ABOUT
        </Link>
      </div>
      <div> 
        <Link to="/portfolio">
          <FontAwesomeIcon
          icon={faCode}
          />
          PORTFOLIO
        </Link>
      </div>
      <div>
        <Link to="/resume">
          <FontAwesomeIcon
          icon={faFileAlt}
          />
          RESUME
        </Link>
      </div>
      <div>
      <a href="https://medium.com/@asabogal">
        <FontAwesomeIcon
        icon={faMedium}
        />
        BLOG
      </a>
      </div>
    </Container>
  );
};

export default SideNavigation;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #1E4051;
  box-shadow: 2px 0px 5px rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  max-width: 400px;
  z-index: 999;
  div {
    display: flex;
    :hover {
      background-color: #1F5061;
    }
  }
  a {
    text-decoration: none;
    color: white;
    padding: 20px;
  }
`;