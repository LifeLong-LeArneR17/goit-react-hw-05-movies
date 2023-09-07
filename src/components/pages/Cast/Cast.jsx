import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CatsFetch } from 'components/services/trendingMovie';
export function Cast() {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCatsDetails = async () => {
      try {
        const result = await CatsFetch(movieId);
        console.log(result)
        setMovie(result);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchCatsDetails();
  }, [movieId]);

  return (
    <div>
      <h1>Cats</h1>
      <ul>
      {movie.map((actor) => (
        <li key={actor.id}>{actor.name}</li>
      ))}
    </ul>
    </div>
  );  
}
