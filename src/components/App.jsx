import { Route, Routes } from 'react-router-dom';

import NotFound from './NotFound/NotFound.styled';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import SharedLayout from './SharedLayout/SharedLayout';
import MovieDetails from './MovieDetails/MovieDetails';
import Reviews from './Reviews/Reviews';
import Cast from './Cast/Cast';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
