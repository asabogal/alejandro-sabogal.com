import React from 'react';
import Footer from '../Components/Footer/Footer'
import Titles from '../Components/Home/Titles'
import './pages.css'
import '../App.css';

const HomePage= () => {
  return (
    <div className="App home-page">
      <Titles/> 
      <Footer/>
  </div>
  );
};

export default HomePage;
