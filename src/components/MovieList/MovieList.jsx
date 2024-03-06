import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Img,
  MovieListWrapper,
  MovieName,
  WrapperCard,
} from './MovieList.styled';
import { DEFAULT_IMAGE_PATH } from 'service';
import defaultImage from '../../service/defaultImage.jpeg';

export default function MovieList({ movies, location }) {
  return movies.map(({ id, title, backdrop_path }) => (
    <MovieListWrapper key={id}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <WrapperCard>
          <Img
            src={
              backdrop_path ? DEFAULT_IMAGE_PATH + backdrop_path : defaultImage
            }
            alt={title}
          />
          <MovieName>{title}</MovieName>
        </WrapperCard>
      </Link>
    </MovieListWrapper>
  ));
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
