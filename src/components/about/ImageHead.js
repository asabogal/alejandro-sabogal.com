import React from 'react';
import styled from 'styled-components';
import picture from '../../Images/Github Pic.jpg';

const ImageHead = () => {
  return (
    <PictureContainer>
       <img src={picture} alt='alejandro'></img>
    </PictureContainer>
  );
};

export default ImageHead;

const PictureContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: auto;
  img {
    width: 250px;
    height: 250px;
    padding: 6px 0px;
    border-radius: 50%;
    opacity: 0.9;
    z-index: -1;
  }
`;