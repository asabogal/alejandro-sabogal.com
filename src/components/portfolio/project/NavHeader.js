import styled from 'styled-components';

const NavHeader = styled.div`
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
`;

export default NavHeader;