import React from 'react';
import ProjectCard from '../Components/Projects/ProjectCard'
import { projectData } from '../Data/projectData'
import { projectsContainer } from './styles'
import Radium from 'radium'

class Projects extends React.Component {

  state = {  }

  render() {

    let sorted = projectData.sort((a, b) => (a.id > b.id) ? -1 : 1)
  
    const renderProjects = sorted.map(project => {
      return (
        <ProjectCard key={project.id} project={project}/>
      )
    })
      
    return (
     <div>
       <h1 style={{textAlign: 'left', fontWeight: 200}}>PERSONAL PROJECTS</h1>
      <div style={projectsContainer}>
       {renderProjects}
      </div>
    </div>
      
    );
  }
}

export default Radium(Projects);