import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DEFAULT_IMAGE_PATH, getMovieCast } from 'service';

export default function Cast() {
  const [cast, setCast] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getMovieCast(id).then(({ data: { cast } }) => setCast(cast));
  }, [id]);

  if (!cast) return;

  console.log('Cast >>>', cast);

  return (
    <ul>
      {cast.map(({ id, name, character, profile_path }) => (
        <li key={id}>
          <img
            src={`${DEFAULT_IMAGE_PATH}${profile_path}`}
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
