import React from 'react';
import styled from 'styled-components';
import {BurgerButton} from '../utils/Buttons';
import SocialBar from '../utils/SocialBar'

const NavHeader = (props) => {
  return (
    <div>
      <HeaderContainer>
          <div>
            <BurgerButton
            size='2x'
            color='#1E4051'
            />
          </div>
          <div>
            <SocialBar
            size='2x'
            color='#1E4051'
            />
          </div>
      </HeaderContainer>
      {props.children}
    </div>
  );
};


export default NavHeader;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  padding: 30px;
`;