import { Outlet } from 'react-router-dom';
import { StyledLink } from './SharedLayout.styled';

export default function SharedLayout() {
  return (
    <div>
      <header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
