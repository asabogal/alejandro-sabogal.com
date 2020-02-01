import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Layout from './components/hoc/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ResumePage from './pages/ResumePage';
import ProjectPage from './pages/ProjectPage';
import PageNotFound from './pages/PageNotFound';
import Helmet from 'react-helmet';
import 'babel-polyfill';

const App = () => {

  const LayoutRoutes = () => (
    <Layout>
      <Switch>
        <Route exact path= '/' component={HomePage}/>
        <Route exact path= '/about' component={AboutPage}/>
        <Route exact path= '/portfolio' component={PortfolioPage}/>
        <Route exact path= '/resume' component={ResumePage}/>
        <Route component={PageNotFound}/>
      </Switch>
    </Layout>
  )

  return (
    <>
      <Helmet>
        <title>Alejandro Sabogal</title>
        <meta name="description" content="My Personal Portfolio Site" />
        <meta name="keywords" cpntent="alejandro, sabogal, alejandro sabogal, web developer, full stack developer, full-stack developer, full stack, full-stack, developer, portfolio" />
      </Helmet>
      <BrowserRouter>
        <Switch>
          <Route exact path= '/portfolio/:name' render={props => <ProjectPage {...props}/>}/>
          <Route component={LayoutRoutes}/>
        </Switch>
      </BrowserRouter>
    </>
 )
}

export default App;