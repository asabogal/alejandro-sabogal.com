import React from 'react';
import styled from 'styled-components';
import image from '../../Images/featured_images/cryptofolio.png'
import image2 from '../../Images/featured_images/cryptofolio2.png'

const Featured = ({stack, name, description, link, url, index}) => {
  let left = parseInt(index)
  return (
    <Wrapper left={left}>
      <Info>
        <h2>{stack}</h2>
        <h1>{name}</h1>
        <p>{description}</p>
        <h4>{link}</h4>
        <h4>{url}</h4>
      </Info>
      <ImageContainer>
        <img className='img-1' src={image2}/>
        <img className='img-2' src={image}/>
      </ImageContainer>
    </Wrapper>
  );
};

export default Featured;

const Wrapper = styled.div`
  display: flex;
  height: 90vh;
  flex-direction: ${(props => props.left % 2 === 0 ? 'row' : 'row-reverse')};
`;

const Info = styled.div`
  flex: 0 1 33%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-self: center;
  align-self: center;
  padding: 0 30px;
`;

const ImageContainer = styled.div`
  flex: 1 1;
  position: relative;
  img {
    width: 80%;
    max-height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -40%); 
    box-shadow: 1px 0px 10px rgba(0,0,0,0.5);
  }
  .img-1 {
    transform: translate(-55%, -55%);
  }
`;