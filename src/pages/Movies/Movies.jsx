import Loader from 'components/Loader/Loader';
import SearchForm from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesByName } from 'service';

export default function Movies() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    setLoading(true);
    setMovies(null);
    getMoviesByName(query)
      .then(({ data }) => setMovies(data?.results))
      .catch(error => setError(error.message))
      .finally(setLoading(false));
  }, [query]);

  function onHandleSearchMovie(value) {
    setSearchParams(value && { query: value });
  }

  if (!movies) return;

  return (
    <>
      <SearchForm onHandleSubmit={onHandleSearchMovie} />
      {loading && <Loader />}
      {error && <h2>{error}</h2>}

      <ul>
        {movies.map(({ id, original_title }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {original_title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
