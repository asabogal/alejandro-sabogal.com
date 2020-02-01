import React, { Component } from 'react';
import NavHeader from '../components/portfolio/project/NavHeader';
import InfoSection from '../components/portfolio/project/InfoSection';
import FeaturedImage from '../components/portfolio/project/FeaturedImage';
import Devices from '../components/portfolio/project/Devices';
import NavFooter from '../components/portfolio/project/NavFooter';
import {projectData} from '../data/projectData';
import Fade from 'react-reveal/Fade';

class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  // Refresh projectPage from cache and scroll to top
  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      window.location.reload();
      window.scrollTo(0, 0);
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const path = this.props.match.params.name;
    const currentProject = projectData.find(data => data.path === path);
    const previousProject = projectData.find(data => data.id === currentProject.id - 1);
    const nextProject = projectData.find(data => data.id === currentProject.id + 1 );

    return (
      <>
        <NavHeader/>
        <Fade>
          <InfoSection project={currentProject}/>
        </Fade>
          <FeaturedImage image={currentProject.images.featured}/>
          <Devices image={currentProject.images.devices}/>
          <NavFooter previousProject={previousProject} nextProject={nextProject}/>
      </>
    );
  }
}

export default ProjectPage;

