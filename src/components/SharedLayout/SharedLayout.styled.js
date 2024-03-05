
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
background-color: #375694;
`

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: #112752;
  box-shadow: 0px 2px 10px 1px #142952;
  height: 50px;
`

export const NavBar = styled.nav`
padding-top: 20px;
  padding-bottom: 20px;
background-color: transparent;
`

export const StyledLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  margin: 20px;
  color: whitesmoke;
  font-size: 25px;

  & svg {
    margin: 7px;
  }

  &.active {
    color: darkorange;
  }
`;

