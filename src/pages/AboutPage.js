import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import ImageHead from '../components/about/ImageHead';
import Titles from '../components/about/Titles';
import Content from '../components/about/Content';
import {MainBtn} from '../components/utils/Buttons';
import Fade from 'react-reveal/Fade';

const AboutPage = () => {
  return (
    <Fade>
      <ImageHead/>
      <Titles/>
      <Content/>
      <BtnContainer>
        <Link to='/portfolio'>
          <MainBtn>VIEW MY WORK</MainBtn>
        </Link> 
      </BtnContainer>      
    </Fade>
  );
};

export default AboutPage;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 25px;
`;