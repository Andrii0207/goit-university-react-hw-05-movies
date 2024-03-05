import { Link, NavLink, Outlet } from 'react-router-dom';
import { Header, NavBar, StyledLink, Wrapper } from './SharedLayout.styled';
import { RxHome } from 'react-icons/rx';
import { BiCameraMovie } from 'react-icons/bi';

export default function SharedLayout() {
  return (
    <Wrapper>
      <Header>
        <nav>
          <StyledLink to="/">
            <RxHome />
            Home
          </StyledLink>
          <StyledLink to="/movies">
            Movies
            <BiCameraMovie />
          </StyledLink>
        </nav>
      </Header>
      <Outlet />
    </Wrapper>
  );
}
