import React from 'react';
import styled from 'styled-components';
import {MainBtn} from '../../utils/Buttons';

const InfoHeader = (props) => {

  const { id, year, repoLink, stack, tools, heading, description, url } = props.projectData
  
  const renderStack = (stack) => {
    return stack.map(s => {
      return (
      <p key={id}>{s}</p>
      );
    });
  }

  const renderTools = (tools) => {
    return tools.map(t => {
      return (
      <p key={id}>{t}</p>
      );
    });
  }

  return (
    <HeaderContainer>
      {console.log(year)}
      <InfoContainer>
        <ul>
          <li>
            <h4>YEAR</h4>
            <p>{year}</p>
          </li>
          <br></br>
          <li>
            <a href={repoLink} target="_blank" rel="noopener noreferrer"><strong>Repo</strong></a>
          </li>
        </ul>
        <ul>
          <li>
            <h4>STACK</h4>
            {renderStack(stack)}
          </li>
          <br></br>
          <li>
            <h4>TOOLS</h4>
            {renderTools(tools)}
          </li>
        </ul>
      </InfoContainer>

      <TextContainer>
        <div><h1>{heading}</h1></div>
        <div><h3>{description}</h3></div>
        <a href={url}>
          <MainBtn>Launch App</MainBtn>
        </a> 
      </TextContainer>
    </HeaderContainer>
  );
};

export default InfoHeader;

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 10vh 30px;
  text-align: left;
  height: 45vh;
  background-color: lightgrey;
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  @media (max-width: 650px) {
    justify-content: center;;
  }

  ul {
    list-style: none;
 
  }
  p {
    font-size: 16px;
    margin-block-start: 5px;
    margin-block-end: 5px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  h4 {
    font-size: 12px;
    margin-block-start: 5px;
    margin-block-end: 5px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  a {
    font-size: 13px;
    align-self: flex-end;
    display: block;
    color: inherit;
  }
`;


const TextContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  padding-left: 12%;
  @media (max-width: 650px) {
    h1 {
      font-size: 25px;
    }
  }
  h1 {
    font-family: 'Raleway', sans-serif;
    font-weight: 900;
    margin-block-start: 3px;
    margin-block-end: 5px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  h3 {
    font-weight: 500;
  }
  button {
    align-self: center; 
  }
`;
