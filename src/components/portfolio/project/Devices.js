import React from 'react';
import styled from 'styled-components';

const Devices = (props) => {
  return (
    <Container>
      <img src={props.image} alt='device-images'/>
    </Container>
  );
};

export default Devices;

const Container = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  height: auto;
  margin: 50px 0px;
  img {
    width: 100%;
    height: 400px;
  }
  @media (max-width: 760px) {
    img {
      height: auto;
    }
  }
`;
