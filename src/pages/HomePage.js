import React, { Component } from 'react';
import styled from 'styled-components';
import Titles from '../components/home/Titles';
import Featured from '../components/home/Featured';
import ToTop from '../components/utils/ToTop';
import {featuredData} from '../data/featuredData';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
    this.myref = React.createRef();
  }

  arrowClickHandler = () => {
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  };

  // scroll(ref) {
  //   ref.current.scrollIntoView({behavior: 'smooth'})
  // }

  renderFeatured = (featuredData) => {
    return featuredData.map((project, index) => {
     return (
      <Featured 
        key={project.id}
        index={index}
        stack={project.stack}
        name={project.name}
        description={project.description}
        link={project.link}
        url={project.url}
        image1={project.image1}
        image2={project.image2}
      />
     )
    })
  }

  render() {
    return (
      <div>
        <Titles/> 
        <h1 style={{textAlign: 'center'}}>Featured Projects</h1>
        <FeaturedContainer>
          {this.renderFeatured(featuredData)}
        </FeaturedContainer>
       
        <ToTop
          size='1x'
          click={this.arrowClickHandler}
        />
      </div>
    );
  }
}

export default HomePage;

const FeaturedContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  row-gap: 250px;
  background-color: #eff5f8;
`;
