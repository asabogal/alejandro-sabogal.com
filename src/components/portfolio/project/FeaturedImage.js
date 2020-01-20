import React from 'react';
import styled from 'styled-components';

const FeatureImage = (props) => {
  return (
    <Container>
      <img src={props.image} alt='project-featured'/>
    </Container>
  );
};

export default FeatureImage;

const Container = styled.div`
  margin-top: 40px;
  width: 100vw;
  height: 100vh;
  box-shadow: 10px 0px 20px rgba(0,0,0,0.5);
  img {
    width: 100%;
    height: auto;
    box-shadow: 10px 0px 20px rgba(0,0,0,0.5);
  }
`;