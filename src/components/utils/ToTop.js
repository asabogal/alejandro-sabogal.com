import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';

const ToTop = (props) => {
  
  return (
    <Wrapper>
      <Fade right>
        <ArrowContainer onClick={props.click}>
          <FontAwesomeIcon
            icon={faAngleUp}
            size={props.size}
            color='#324955'
          />
        </ArrowContainer>
      </Fade>
    </Wrapper>
  );
};

export default ToTop;

const Wrapper = styled.div`
  display: block;
  position: fixed;
  right: 0;
  bottom: 10%;

`;

const ArrowContainer = styled.div`
  opacity: 0.9;
  padding: 10px 15px;
  background-color: lightgray;
`;