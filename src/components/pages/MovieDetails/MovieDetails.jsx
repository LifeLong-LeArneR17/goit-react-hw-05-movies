import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Cast } from '../Cast/Cast'
import { movieDetailsFetch } from 'components/services/trendingMovie'
export function MovieDetails  ()  {
  const [movie, setmovie] = useState([])
  const { movieId } = useParams();
   useEffect(() => {
     const fetchMovieDetails = async () => {
      try  {
      const result = await movieDetailsFetch(movieId)
      setmovie(result)
      }
      catch (error) {
      console.log(error);
      }
     }
     fetchMovieDetails()
   }, [movieId]);

   return (
    <div>
     {movie.map((el) => (
  
      <div key={el.id}>
      <h1>{el.title} ({el.release_date})</h1>
        <p>User Score: {Math.round(el.popularity / 100)}%</p>
        <h2>Overview</h2>
        <p>{el.overview}</p>
        <h3>Genres</h3>
        <ul>
          {el.genres.map((genre) => {
            <li key={genre.id}>{genre.name}</li>
          })}
         </ul>
         <h2>Additional information</h2>
         <Link to='cast'>Cast</Link>
        <Link to='reviews'>Reviews</Link>
         </div>
     ))}
    </div>
  );
  
}
  
  
  
  