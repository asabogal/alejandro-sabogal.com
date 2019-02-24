import React from 'react';
import picture from './Images/Github Pic.jpg'
import { pageContainer, pictureContainer, pic, textContainer, bigText, smallText} from './styles'
import Radium from 'radium'

const About = () => {
  return (
    <div style={pageContainer}> 
      <div style={pictureContainer}>
        <img style={pic} src={picture}></img>
      </div>

      <div style={textContainer}>
        <h1 style={bigText}>Hi! I am Alejandro, a Software and Web Developer based in New York City.</h1>
        <p style={smallText}>I love coding just as much as I love making music. Both can be beautiful and complex, and I love creating this art. I am proficient in Ruby and JavaScript and enjoy builing efficient and useful applications. I have professional experience in other fileds; Finance, Hospitality, Entrepernuership. </p>
      </div>   

    </div>
    
   
  );
};

export default Radium(About);