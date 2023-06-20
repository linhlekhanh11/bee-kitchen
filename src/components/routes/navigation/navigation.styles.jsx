import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 130px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background-color: rgb(248, 213, 183);
`;

export const LogoContainer = styled(Link)`
      height: 100%;
      width: 130px;
      padding: 25px;
      margin-left: 1%;
`;

export const NavLinksContainer = styled.div`
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-right: 2%;
`;

export const NavLinks = styled(Link)`
        padding: 10px 15px;
        cursor: pointer;
`;



