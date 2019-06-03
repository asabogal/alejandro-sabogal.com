import React from 'react';
import ProjectCard from '../Components/Projects/ProjectCard'
import { exercisesData } from '../Data/exercisesData'
import { projectsContainer, heading, description } from './styles'
import Radium from 'radium'

const Exercises = () => {

  let sorted = exercisesData.sort((a, b) => (a.id > b.id) ? -1 : 1)
  console.log(sorted)

  const renderProjects = sorted.map(project => {
    return (
      <ProjectCard key={project.id} project={project}/>
    )
      
  })
  return (
    <div>
       <h1 style={heading}>EXERCISES</h1>
       <p style={description}>A collection of small web applications intended to practice fundamental and advanced web development skills</p>
        <div style={projectsContainer}>
         {renderProjects}
        </div>
    </div>
  );
};

export default Radium(Exercises);