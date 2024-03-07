import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  Header,
  ListItemLeft,
  ListItemRight,
  StyledLink,
  Wrapper,
  WrapperListMenu,
} from './SharedLayout.styled';
import { RxHome } from 'react-icons/rx';
import { BiCameraMovie } from 'react-icons/bi';

export default function SharedLayout() {
  return (
    <Wrapper>
      <Header>
        <nav>
          <WrapperListMenu>
            <ListItemLeft>
              <StyledLink to="/">Home</StyledLink>
              <RxHome style={{ width: '24px', height: '24px' }} />
            </ListItemLeft>
            <ListItemRight>
              <StyledLink to="/movies">Movies</StyledLink>
              <BiCameraMovie style={{ width: '24px', height: '24px' }} />
            </ListItemRight>
          </WrapperListMenu>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
}
