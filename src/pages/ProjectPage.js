import React, { Component } from 'react';
import NavHeader from '../components/portfolio/project/NavHeader';
import InfoSection from '../components/portfolio/project/InfoSection';
import FeaturedImage from '../components/portfolio/project/FeaturedImage';
import Devices from '../components/portfolio/project/Devices';
import NavFooter from '../components/portfolio/project/NavFooter';
import {projectData} from '../data/projectData';

class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() {
    const path = this.props.match.params.name;
    const currentProject = projectData.find(data => data.path === path);
    const previousProject = projectData.find(data => data.id === currentProject.id - 1);
    const nextProject = projectData.find(data => data.id === currentProject.id + 1 );

    return (
      <div>
        <NavHeader/>
        <InfoSection project={currentProject}/>
        <FeaturedImage image={currentProject.images.featured}/>
        <Devices image={currentProject.images.devices}/>
        <NavFooter previousProject={previousProject} nextProject={nextProject}/>
      </div>
    );
  }
}

export default ProjectPage;

