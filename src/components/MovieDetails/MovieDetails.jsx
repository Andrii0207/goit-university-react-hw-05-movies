import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMoviesById, releaseDateUpdate, DEFAULT_IMAGE_PATH } from 'service';
import { genresUpdate } from '../../service';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getMoviesById(id).then(({ data }) => setMovie(data));
  }, [id]);

  if (!movie) {
    return;
  }

  const { backdrop_path, original_title, release_date, overview, genres } =
    movie;

  return (
    <div>
      <div>
        <img
          src={`${DEFAULT_IMAGE_PATH}${backdrop_path}`}
          alt={original_title}
        />
      </div>

      <div>
        <h2>Card component</h2>
        <p>
          <b>
            {original_title} ({releaseDateUpdate(release_date)})
          </b>
        </p>
        <p>
          <b>Overview</b> {overview}
        </p>
        <p>
          <b>Genres</b> {genresUpdate(genres)}
        </p>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
}
