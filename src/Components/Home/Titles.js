import React from 'react';
import { titleTop, titleCenter, animations } from './styles'
import Radium from 'radium';

const Titles = () => {

  return (
    <div>
      <p style={[titleTop, animations.expandTitle]}>ALEJANDRO SABOGAL</p>
      <div style={animations.fadeTitle}>
        <h1 style={[titleCenter]}>FULL STACK<br></br> DEVELOPER</h1>
        <h4>JavaScript | React | Ruby | Rails</h4>
      </div>
    </div>
  );
};

export default Radium(Titles);