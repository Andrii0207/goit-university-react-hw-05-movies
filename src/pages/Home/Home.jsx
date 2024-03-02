import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { favoritesMovieList } from 'service/api';

export default function Home() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    favoritesMovieList().then(({ data: { results } }) => setMovies(results));
  }, []);

  return (
    <section>
      <ul>
        {movies &&
          movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`movies/${id}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </section>
  );
}
