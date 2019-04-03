import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import PortfolioPage from './Pages/PortfolioPage'
import ResumePage from './Pages/ResumePage'
import PageNotFound from './Pages/PageNotFound'
import Helmet from 'react-helmet'
import 'babel-polyfill'
import Radium, { StyleRoot } from 'radium';

const Router = () => {

  return (
    <StyleRoot>
      <Helmet>
        <title>Alejandro Sabogal</title>
        <meta name="description" content="My Personal Portfolio Site" />
        <meta name="keywords" cpntent="alejandro, sabogal, alejandro sabogal, web developer, full stack developer, full-stack developer, full stack, full-stack, developer, portfolio" />
      </Helmet>
      <HashRouter basename='/'>
        <Switch>
          <Route exact path= '/' component={HomePage}/>
          <Route exact path= '/about' component={AboutPage}/>
          <Route exact path= '/portfolio' component={PortfolioPage}/>
          <Route exact path= '/resume' component={ResumePage}/>
          <Route component={PageNotFound}/>
        </Switch>
      </HashRouter>
    </StyleRoot>
 )
}

export default Radium(Router);