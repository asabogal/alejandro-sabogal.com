import React from 'react';
import ProjectCard from '../Components/Projects/ProjectCard'
import { excercisesData } from '../Data/excercisesData'
import { projectsContainer, heading, description } from './styles'
import Radium from 'radium'

const Excercises = () => {

  let sorted = excercisesData.sort((a, b) => (a.id > b.id) ? -1 : 1)
  console.log(sorted)

  const renderProjects = sorted.map(project => {
    return (
      <ProjectCard key={project.id} project={project}/>
    )
      
  })
  return (
    <div>
       <h1 style={heading}>EXCERCISES</h1>
       <p style={description}>A collection of small web applications intended to practice fundamental and advanced web development skills</p>
        <div style={projectsContainer}>
         {renderProjects}
        </div>
    </div>
  );
};

export default Radium(Excercises);