import React from 'react';
import crypto from './images/cryptofolio_inprogress.png'

const InProgress = () => {
  return (
    <div style={styles.div}>
      <h1 style={styles.h1}>IN PROGRESS</h1>
    </div>
  );
};

export default InProgress;

const styles = {
  div: {
    position: 'relative',
    height: '100vh',
    width: '100vw',
    background: `url(${crypto}) no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    opacity: '.7',
    zIndex: '99'
  },
    h1: {
    position: 'absolute',
    top: '15%',
    color: 'grey',
    fontSize: '220px',
    lineHeight: '80%',
    zIndex: '0',
    opacity: '.4'
    // transform: 'rotate(-45deg)',
  }
}