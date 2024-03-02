import { Route, Routes } from 'react-router-dom';

import NotFound from './NotFound/NotFound.styled';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import SharedLayout from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
