import MovieDetails from 'components/Card/MovieDetails';
import SearchMovie from 'components/SearchMovie/SearchMovie';
import { useParams } from 'react-router-dom';

export default function Movies() {
  const { id } = useParams();

  console.log(id);

  return (
    <>
      <SearchMovie />
      {id && <MovieDetails />}
    </>
  );
}
