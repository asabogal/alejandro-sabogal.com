import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export const BurgerButton = (props) => {
  return (
    <BtnContainer>
      <FontAwesomeIcon 
        icon={faBars} 
        size={props.size} 
        color={props.color}
        onClick={props.click}
      />
    </BtnContainer>
  );
};

export const CloseButton = (props) => {
  return (
    <CloseBtn>
      <FontAwesomeIcon 
        icon={faTimes} 
        size={props.size} 
        color={props.color}
        onClick={props.click}
      />
    </CloseBtn>
  );
};

const BtnContainer = styled.div`
  cursor: pointer;
`;

const CloseBtn = styled(BtnContainer)`
  margin: 20px 20px 10px 0px;
  :hover {
    transform: scale(1.3)
    }
`;