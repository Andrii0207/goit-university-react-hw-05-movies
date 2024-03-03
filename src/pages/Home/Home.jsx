import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { favoritesMovieList } from 'service/api';

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
      .finally(
        setTimeout(() => {
          setLoading(false);
        }, 2000)
      );
  }, []);

  return (
    <section>
      <h2>Trending today</h2>
      <ul>
        {movies &&
          movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        {loading && <Loader />}
        {error && <h2>{error}</h2>}
      </ul>
    </section>
  );
}
