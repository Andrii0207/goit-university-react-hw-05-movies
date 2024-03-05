import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { favoritesMovieList } from 'service/api';
import { MovieListContainer, PageName, Section } from './Home.styled';

export default function Home() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    favoritesMovieList()
      .then(({ data: { results } }) => setMovies(results))
      .catch(error => setError(error.message))
      .finally(setLoading(false));
  }, []);

  return (
    <Section>
      <PageName>Trending today</PageName>
      <MovieListContainer>
        {movies && <MovieList movies={movies} location={location} />}
      </MovieListContainer>
      {loading && <Loader />}
      {error && <h2>{error}</h2>}
    </Section>
  );
}
