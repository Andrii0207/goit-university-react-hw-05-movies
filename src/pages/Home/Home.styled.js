import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
display: block;
margin-left: 25px;
margin-right: 25px;
`

export const StyledLink = styled(NavLink)`
  color: black;
`;

export const PageName = styled.h2`
text-align: center;
margin-top: 23px;
margin-bottom: 23px;
font-size: 28px;
color: darkorange;
font-weight: 500;
`

export const MovieListContainer = styled.ul`
display: flex;
flex-wrap: wrap;
  grid-gap: 20px;
`