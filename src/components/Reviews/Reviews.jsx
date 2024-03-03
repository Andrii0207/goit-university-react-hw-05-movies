import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReview } from 'service';

export default function Reviews() {
  const [review, setReview] = useState();

  const { id } = useParams();

  useEffect(() => {
    getMovieReview(id).then(({ data: { results } }) => setReview(results));
  }, [id]);

  if (!review) return;
  console.log('Reviews >>>', review);

  return (
    <ul>
      {review.map(({ id, author, content }) => (
        <li key={id}>
          <p>
            <b>{author}</b>
          </p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
}
