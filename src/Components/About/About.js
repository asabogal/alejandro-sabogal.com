import React from 'react';
import picture from './Images/Github Pic.jpg'
import gradeA from './Images/gradeA.png'
import practical from './Images/practical.png'
import precision from './Images/precision.png'
import passion from './Images/passion.png'
import ruby from './Images/ruby.png'
import rails from './Images/rails.png'
import react from './Images/react.png'
import js from './Images/js.png'
import html5 from './Images/html5.png'
import css3 from './Images/css3.png'
import redux from './Images/redux.png'
import sql from './Images/sql.png'

import { pageContainer, pictureContainer, pic, header, textContainer, bigText, smallText, iconsContainer, iconsContainer2 } from './styles'
import Radium from 'radium'

const About = () => {
  return (
    <div style={pageContainer}> 

      <div style={pictureContainer}>
        <img style={pic} src={picture}></img>
      </div>

      <div style={textContainer}>
        <h1 style={bigText}>Hello! I am Alejandro, a Web and Applications Developer based in New York City.</h1>
        <p style={smallText}>To me, programming is like making music, both can be beautiful and complex, and I express my creativity when writing both. I'm proficient in Ruby, JavaScript and React, and enjoy building efficient and useful applications. I have professional experience in other fields; Finance, Entrepreneurship, and Audio Engineering. </p>
      </div>   

      <div>
        <h1 style={header}>What I Build</h1>
      </div>

    <div style={iconsContainer}>
       <div>
          <img src={gradeA}></img> 
          <p>Quality Applications</p>
        </div>

        <div>
          <img src={practical}></img> 
          <p>Practical and Efficient</p>
        </div>

        <div>
          <img src={precision}></img> 
          <p>Precise and Modern Code</p>
        </div>

        <div>
          <img src={passion}></img> 
          <p>Built with Passion</p>
        </div>
    </div>

    <div>
      <h1 style={header}>Technologies and Skills, I Use</h1>
    </div>    

    <div style={iconsContainer2}>
      <div>
        <img src={js}></img> 
        <p>JavaScript</p>
      </div>

      <div>
          <img src={react}></img> 
          <p>React.js</p>
      </div>
      <div>
          <img src={redux}></img> 
          <p>Redux</p>
      </div>
       <div>
          <img src={ruby}></img> 
          <p>Ruby</p>
        </div>

        <div>
          <img src={rails}></img> 
          <p>Rails</p>
        </div>
        <div>
          <img src={sql}></img> 
          <p>SQL</p>
        </div>
        <div>
          <img src={html5}></img> 
          <p>HTML5</p>
        </div>

        <div>
          <img src={css3}></img> 
          <p>CSS3</p>
        </div>
       
    </div>

    </div>
    
   
  );
};

export default Radium(About);