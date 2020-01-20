import React from 'react';
import styled from 'styled-components';
import MainImage from './MainImage';
import SideInfo from './SideInfo';

const InfoSection = (props) => {

  return (
    <Container>
      <MainImage image={props.project.images.home}/>
      <SideInfo project={props.project}/>
    </Container>
  );
};  

export default InfoSection;

const Container = styled.div`
  display: flex;
  height: 100vh;
  padding: 5vh;
  margin-top: 25px;
  @media (max-width: 900px){
    flex-direction: column;
  }
`;



  