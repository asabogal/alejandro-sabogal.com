import React, { Component } from 'react';
import NavHeader from '../components/portfolio/project/NavHeader';
import InfoHeader from '../components/portfolio/project/InfoHeader';
import {Link} from 'react-router-dom';
import {projectData} from '../data/projectData';

class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() {
    const path = this.props.match.params.name;
    const project = projectData.find(data => data.path === path);

    return (
      <div>
        <NavHeader>
          {console.log('this path is;', path)}
          <Link to='/portfolio'>
            <p>Back to Projects <span style={{fontSize: '25px', marginLeft: '10px'}}>&larr;</span></p>
          </Link>
        </NavHeader>
        <InfoHeader project={project}/>
      </div>
    );
  }
}

export default ProjectPage;