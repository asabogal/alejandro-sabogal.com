import React from 'react';
import ProjectCard from '../components/projects/ProjectCard'
import { projectData } from '../data/projectData'
import { projectsContainer, heading, description } from './styles'
import Radium from 'radium'

class Portfolio extends React.Component {

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
       <h1 style={heading}>EXPERIENCE</h1>
       <p style={description}>Fully functional, front and back-end architected projects</p>
        <div style={projectsContainer}>
         {renderProjects}
        </div>
    </div>
      
    );
  }
}

export default Radium(Portfolio);