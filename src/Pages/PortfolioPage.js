import React from 'react';
import NavHeader from '../Components/Navigation/NavHeader'
import Footer from '../Components/Footer/Footer'
import ProjectCard from '../Components/Projects/ProjectCard'

import { projectData } from '../Data/projectData'

const PortfolioPage = () => {

 let sortedData = projectData.sort((a, b) => (a.id > b.id) ? -1 : 1);
  console.log(sortedData)

  const renderProjects = sortedData.map(project => {
    return (
      <ProjectCard key={project.id} project={project}/>
    )
  });

  return (
    <div>
      <NavHeader/>
      Portfolio Page...
      {renderProjects}
      <Footer/>
    </div>
  );
};

export default PortfolioPage;