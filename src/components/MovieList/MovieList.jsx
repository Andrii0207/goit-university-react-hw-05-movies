import { Link } from 'react-router-dom';
import {
  Img,
  MovieListWrapper,
  MovieName,
  WrapperCard,
} from './MovieList.styled';
import { DEFAULT_IMAGE_PATH } from 'service';

export default function MovieList({ movies, location }) {
  console.log(movies);
  return movies.map(({ id, title, backdrop_path }) => (
    <MovieListWrapper key={id}>
      <Link to={`movies/${id}`} state={{ from: location }}>
        <WrapperCard>
          <Img src={`${DEFAULT_IMAGE_PATH}${backdrop_path}`} alt="" />
          <MovieName>{title}</MovieName>
        </WrapperCard>
      </Link>
    </MovieListWrapper>
  ));
}
