import React from 'react';
import './titles.css'
import { titleTop, titleCenter } from './styles'
import Radium from 'radium';

const Titles = () => {

  return (
    <div>
      <h4 style={titleTop}>ALEJANDRO SABOGAL</h4>
      <h1 style={titleCenter}>FULL STACK<br></br> DEVELOPER</h1>
      <h4>JavaScript | React | Ruby | Rails</h4>
    </div>
  );
};

export default Radium(Titles);