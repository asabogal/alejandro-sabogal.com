import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faProjectDiagram} from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';


const Featured = ({stack, name, description, link, url, image1, image2, index}) => {
  let left = parseInt(index)
  return (
    <Fade>
      <Wrapper left={left}>
        <InfoContainer>
          <h2>{stack}</h2>
          <h1>{name}</h1>
          <p>{description}</p>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              style={{marginRight: '10px'}}
              size='sm'
              icon={faLaptop}
            />
            Launch App
          </a>
          <Link to={link}>
          <FontAwesomeIcon
            style={{marginRight: '10px'}}
            size="sm"
            icon={faProjectDiagram}
          />
            View Project
          </Link>
          </InfoContainer>
        <ImageContainer>
          <img className='img-2' src={image2}/>
          <img className='img-1' src={image1}/>
        </ImageContainer>
     </Wrapper>
    </Fade>
    
  );
};

export default Featured;

const Wrapper = styled.div`
  display: flex;
  height: 80vh;
  flex-direction: ${(props => props.left % 2 === 0 ? 'row' : 'row-reverse')};
`;

const InfoContainer = styled.div`
  flex: 0 1 40%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-self: center;
  align-self: center;
  padding: 0 30px;
  h2 {
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 600;
    color: #909ba1;
    margin-block-start: 5px;
    margin-block-end: 5px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  h1 {
    font-weight: 600;
    margin-block-start: 5px;
    margin-block-end: 5px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  a {
    text-decoration: none;
    color: inherit;
    margin: 10px;
  }

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
  .img-2 {
    transform: translate(-55%, -55%);
  }
`;