import React from 'react';
import error from '../Components/Navigation/Icons/error.png'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className="not-found"> 
      <img src={error} alt='error'></img>
      <h1 className="message">Page not found!</h1>
      <p>Oops! You seem lost. You have found a broken link or entered a URL that doesn't exist on this site.</p>
      <Link to="/">Back to site</Link>
    </div>
  );
};

export default PageNotFound;