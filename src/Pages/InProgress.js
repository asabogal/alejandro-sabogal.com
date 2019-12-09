import React from 'react';
import Radium from 'radium'
import crypto from './images/cryptofolio_inprogress.png'

const InProgress = () => {
  return (
    <div style={styles.div}>
      <h1 style={styles.h1}>IN PROGRESS</h1>
      <a className="App-link" style={styles.link1} href='https://github.com/asabogal/cryptofolio-client'>Client</a>
      <a className="App-link" style={styles.link2} href='https://github.com/asabogal/cryptofolio-api'>API</a>
    </div>
  );
};

export default Radium(InProgress);

const styles = {
  div: {
    position: 'relative',
    height: '100vh',
    width: '100vw',
    background: `url(${crypto}) no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    opacity: '.7',
    zIndex: '99',
    
  },
    h1: {
    position: 'absolute',
    top: '15%',
    paddingLeft: '10px',
    color: 'grey',
    fontSize: '220px',
    lineHeight: '80%',
    zIndex: '0',
    opacity: '.4',
    '@media (max-width: 1150px)': {
      top: '20%',
      fontSize: '160px',
    },
    '@media (max-width: 850px)': {
      top: '30%',
      fontSize: '100px',
      paddingLeft: '0px',
    },
    '@media (max-width: 450px)': {
      top: '40%',
      fontSize: '50px',
      paddingLeft: '0px',
       transform: 'rotate(-45deg)',
    }
    // transform: 'rotate(-45deg)',
  },
    link1: {
      position: 'absolute',
      top: '85%',
      left: '40%',
      fontSize: '18px',
      fontWeight: '400'
  },
  link2: {
    position: 'absolute',
    top: '85%',
    left: '55%',
    fontSize: '18px',
    fontWeight: '400'
}
}