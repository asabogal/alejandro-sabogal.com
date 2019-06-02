import React from 'react';
import NavHeader from '../Components/Navigation/NavHeader'
import Footer from '../Components/Footer/Footer'
import Portfolio from '../Containers/Portfolio'
import Excercises from '../Containers/Excercises'

const PortfolioPage = () => {

  return (
    <div >
      <NavHeader/>
      <Portfolio/>
      <Excercises/>
      <Footer/>
    </div>
      
  );
};

export default PortfolioPage;