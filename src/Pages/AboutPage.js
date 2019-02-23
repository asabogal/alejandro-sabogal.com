import React from 'react';
import { Container, Row, Col } from 'reactstrap'

const AboutPage = () => {
  return (
    <div>
      <Container>
      <Row>
        <Col xs="6">
          <h1>Hi! I am Alejandro, a software and web developer based in New York City.</h1>
        </Col>
        <Col sx="6">
          <h5>My love for coding comes from my passion for creating music. Both can be beautiful and I love creating this art. I am proficient in Ruby and JavaScript and enjoy problem solving. I have professional experience in other fileds; Fiance, Hospitality, Entrepernuership. </h5>
        </Col>
      </Row> 
    </Container>
    </div>
    
  );
};

export default AboutPage;