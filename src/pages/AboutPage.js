import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import ImageHead from '../components/about/ImageHead';
import Titles from '../components/about/Titles';
import Content from '../components/about/Content';
import {MainBtn} from '../components/utils/Buttons';

const AboutPage = () => {
  return (
    <div>
      <ImageHead/>
      <Titles/>
      <Content/>
      <BtnContainer>
        <Link to='/work'>
          <MainBtn>VIEW MY WORK</MainBtn>
        </Link> 
      </BtnContainer>
    </div>
  );
};

export default AboutPage;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 25px;
`;