import { useEffect, useState, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { getMoviesById, releaseDateUpdate, DEFAULT_IMAGE_PATH } from 'service';
import { genresUpdate } from '../../service';
import defaultImage from '../../service/defaultImage.jpeg';
import { CardWrapper, Img, StyledLink, Wrapper } from './MovieDetails.styled';

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
      <StyledLink to={location.state?.from ?? '/movies'}>
        <IoArrowBack />
        go back
      </StyledLink>
      <div>
        <Img
          src={
            backdrop_path ? DEFAULT_IMAGE_PATH + backdrop_path : defaultImage
          }
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
          <b>Overview:</b> {overview}
        </p>
        <p>
          <b>Genres:</b> {genresUpdate(genres)}
        </p>
      </div>
      <div>
        <h3>Additional information</h3>
        <Wrapper>
          <li>
            <Link to="cast" state={{ from: location.state?.from }}>
              <b>Cast</b>
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location.state?.from }}>
              <b>Reviews</b>
            </Link>
          </li>
        </Wrapper>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </CardWrapper>
  );
}
