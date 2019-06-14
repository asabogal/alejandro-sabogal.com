import React from 'react';
import ProjectCard from '../Components/Projects/ProjectCard'
import { projectData } from '../Data/projectData'
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
       <h1 style={heading}>PROJECTS</h1>
       <p style={description}>Fully functional, front and back end architected applications</p>
        <div style={projectsContainer}>
         {renderProjects}
        </div>
    </div>
      
    );
  }
}

export default Radium(Portfolio);