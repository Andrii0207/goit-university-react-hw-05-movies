import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DEFAULT_IMAGE_PATH, getMovieCast } from 'service';
import defaultImage from '../../service/defaultImage.jpeg';
import { Img } from './Cast.styled';

export default function Cast() {
  const [cast, setCast] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getMovieCast(id).then(({ data: { cast } }) => setCast(cast));
  }, [id]);

  if (!cast) return;

  return (
    <ul>
      {cast.map(({ id, name, character, profile_path }) => (
        <li key={id}>
          <Img
            src={
              profile_path ? DEFAULT_IMAGE_PATH + profile_path : defaultImage
            }
            alt={name}
            width="100"
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
}
