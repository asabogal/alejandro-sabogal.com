import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const NavHeader = () => {
  return (
    <NavContainer>
      <Link to='/portfolio'>
        <p>Back to Projects <span style={{fontSize: '25px', marginLeft: '10px'}}>&larr;</span></p>
      </Link>
    </NavContainer>
  )
};

export default NavHeader;

const NavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  justify-items: flex-end;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  height: 30px;
  width: 100vw;
  padding: 0px 40px;
  font-size: 14px;
  background-color: #edf1f3;
  a {
    text-decoration: none;
    color: inherit;
  }
  p {
    font-size: 18px;
  }
  span {
    margin-left:10px
  }
`;
