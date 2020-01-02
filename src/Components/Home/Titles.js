import React from './node_modules/react';
import styled from './node_modules/styled-components';

const Titles = () => {

  return (
    <Container>
     <h1>ALEJANDRO SABOGAL</h1>
     <h2>SOFTWARE + WEB DEVELOPER</h2>
     <h3>React | JavaScript | Node | Ruby | Rails</h3>
    </Container>
  );
};

export default Titles;

const Container = styled.div`
  h1 {
    font-size: 60px;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  h2 {
    font-size: 32px;
    margin-block-start: 5px;
    margin-block-end: 5px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`;