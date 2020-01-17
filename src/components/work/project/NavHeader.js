import styled from 'styled-components';

const NavHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  justify-items: flex-end;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  padding: 0px 40px;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default NavHeader;