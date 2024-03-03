import SearchForm from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getMoviesByName } from 'service';

export default function Movies() {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    getMoviesByName(query).then(({ data: { results } }) => setMovies(results));
  }, [query]);

  function onHandleSearchMovie(value) {
    setSearchParams(value && { query: value });
  }

  if (!movies) return;

  console.log('movies >>>', movies);
  return (
    <>
      <SearchForm onHandleSubmit={onHandleSearchMovie} />
      <ul>
        {movies.map(({ id, original_title }) => (
          <li key={id}>
            <Link to={`${id}`}>{original_title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
