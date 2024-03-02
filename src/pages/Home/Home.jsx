import MovieCard from 'components/MovieCard/MovieCard';
import { useEffect, useState } from 'react';
import favoritesMovieList from 'service/api';

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
              <MovieCard title={title} />
            </li>
          ))}
      </ul>
    </section>
  );
}
