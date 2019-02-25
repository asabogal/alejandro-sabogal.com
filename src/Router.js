import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import PortfolioPage from './Pages/PortfolioPage'
import Radium, { StyleRoot } from 'radium';

const Router = () => {

  return (
    <StyleRoot>
      <BrowserRouter>
        <Switch>
          <Route exact path= '/' component={HomePage}/>
          <Route exact path= '/about' component={AboutPage}/>
          <Route exact path= '/portfolio' component={PortfolioPage}/>
        </Switch>
      </BrowserRouter>
    </StyleRoot>
 )
}

export default Radium(Router);