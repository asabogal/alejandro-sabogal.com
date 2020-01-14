import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

const SocialBar = (props) => {

  return (
    <Container>
      <a href="https://www.github.com/asabogal">
        <FontAwesomeIcon 
          icon={faGithubSquare} 
          size={props.size}
          color={props.color} 
        />
      </a>

      <a href="https://www.linkedin.com/in/alejandro-sabogal-dev">
        <FontAwesomeIcon 
          icon={faLinkedin} 
          size={props.size}
          color={props.color} 
        />
      </a>

      <a href="mailto:asabogal.dev@gmail.com">
        <FontAwesomeIcon 
          icon={faEnvelopeSquare} 
          size={props.size}
          color={props.color} 
        />
        </a>
    </Container>
  );
};

export default SocialBar;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  a {
    padding: 5px;
    cursor: pointer;
  }
`;