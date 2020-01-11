import React from 'react';
import styled from 'styled-components';

const ContentCard = (props) => {
  return (
    <CardContainer>
      <div>
        <img src={props.image} alt='code-icon'/>
      </div>
      <h3>{props.title}</h3>
      <p>{props.paragraph}</p>
    </CardContainer>
  );
};

export default ContentCard;

const CardContainer = styled.div`
  display: grid;
  grid-template-rows: auto 35px auto;
  grid-template-columns: auto;
  justify-content: center;
  align-content: center;
  margin: 50px;
  text-align: center;
  div {
    width: 120px;
    height: 120px;
    justify-self: center;
    align-self: center;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;