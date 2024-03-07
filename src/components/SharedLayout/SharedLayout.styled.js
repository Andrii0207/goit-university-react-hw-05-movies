
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
background-color: #375694;
padding-bottom: 50px;
min-height: 100vh;
height: 100%;
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
  margin: 15px;
  color: whitesmoke;
  font-size: 25px;

  &.active { 
    color: darkorange;
  }
  
  &.active + svg {
    color: darkorange;
  }
 `;

export const WrapperListMenu = styled.ul`
display: flex;
justify-content: center;
align-items: center;
color: white;
`
export const ListItemLeft = styled.li`
display: flex;
flex-direction: row-reverse;
align-items: center;
`
export const ListItemRight = styled.li`
display: flex;
justify-content: center;
align-items: center;
`