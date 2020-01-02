import React from 'react';
import './styles.css'

const ProjectCard = (props) => {

  const { name, description, tools, repoLink, image, url, video } = props.project
  
  const handleClick = () => {
    window.open(url)
  }

  return (
    <div className="project-card">
        <h3>{name}</h3>
        <img className="project-img" src={image} alt="project-card"/>
          <div className="card-overlay">
            <div className="card-content">
            <p>{description}</p>  
            <p className="tools">{tools}</p>
          
            <button className="btn-circle" onClick={handleClick}>Launch App</button>
            <br></br>
            <br></br>

            <a className="App-link" style={{fontSize: '16px'}} href={video}>{video ? 'Video Demo' : null}</a>
            <a className="App-link" style={{fontSize: '16px'}} href={repoLink}>Repo</a>
           </div>
         </div>
      </div>
  );
};

export default ProjectCard;