import React from 'react';
import picture from './Images/Github Pic.jpg'
import gradeA from './Images/gradeA.png'
import practical from './Images/practical.png'
import precision from './Images/precision.png'
import passion from './Images/passion.png'
import { pageContainer, pictureContainer, pic, textContainer, bigText, smallText, iconsContainer } from './styles'
import Radium from 'radium'

const About = () => {
  return (
    <div style={pageContainer}> 

      <div style={pictureContainer}>
        <img style={pic} src={picture}></img>
      </div>

      <div style={textContainer}>
        <h1 style={bigText}>Hello! I am Alejandro, a Web and Applications Developer based in New York City.</h1>
        <p style={smallText}>I love coding just as much as I love making music. Both can be beautiful and complex, and I thrive while creating this art. I am proficient in Ruby and JavaScript and enjoy building efficient and useful applications. I have professional experience in other fileds; Finance, Hospitality, Entrepreneurship. </p>
      </div>   

    <div>

    </div>

    <div style={iconsContainer}>
       <div>
          <img src={gradeA}></img> <br></br>
          <p>Practical Applications</p>
        </div>

        <div>
          <img src={practical}></img> <br></br>
          <p>Detailed and Efficient</p>
        </div>

        <div>
          <img src={precision}></img> <br></br>
          <p>Precise and Modern Code</p>
        </div>

        <div>
          <img src={passion}></img> <br></br>
          <p>Built with Passion</p>
        </div>
    </div>
        

    </div>
    
   
  );
};

export default Radium(About);