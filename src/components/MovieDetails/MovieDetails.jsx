import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { getMoviesById, releaseDateUpdate, DEFAULT_IMAGE_PATH } from 'service';
import { genresUpdate } from '../../service';
import { CardWrapper } from './MovieDetails.styled';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMoviesById(id).then(({ data }) => setMovie(data));
  }, [id]);

  if (!movie) {
    return;
  }

  const { backdrop_path, original_title, release_date, overview, genres } =
    movie;

  return (
    <CardWrapper>
      <Link to={location.state?.from ?? '/movies'}>
        <IoArrowBack />
        go back
      </Link>
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
            <Link to="cast" state={{ from: location.state?.from }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location.state?.from }}>
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </CardWrapper>
  );
}
