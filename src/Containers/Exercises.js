import React from 'react';
import ProjectCard from '../components/projects/ProjectCard'
import { exercisesData } from '../Data/exercisesData'
import { projectsContainer, heading, description } from './styles'
import Radium from 'radium'

const Exercises = () => {

  let sorted = exercisesData.sort((a, b) => (a.id > b.id) ? -1 : 1)

  const renderProjects = sorted.map(project => {
    return (
      <ProjectCard key={project.id} project={project}/>
    )
      
  })
  return (
    <div>
       <h1 style={heading}>EXERCISES</h1>
       <p style={description}>A collection of small web applications intended to hone fundamental and advanced front-end development skills</p>
        <div style={projectsContainer}>
         {renderProjects}
        </div>
    </div>
  );
};

export default Radium(Exercises);