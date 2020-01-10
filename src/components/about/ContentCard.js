import React from 'react';
import styled from 'styled-components';

const ContentCard = (props) => {
  return (
    <CardContainer>
      <img src={props.image}/>
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
  img {
    justify-self: center;
    align-self: center;
  }
`;