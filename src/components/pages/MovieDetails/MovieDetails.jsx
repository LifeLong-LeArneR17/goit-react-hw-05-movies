import React, { useEffect, useState } from 'react'
import { Link, useParams, Outlet } from 'react-router-dom'
import { movieDetailsFetch } from 'components/services/trendingMovie'
import { BackLink } from 'components/GoBack.jsx/GoBack'
import './MovieDetails.css'
function MovieDetails  ()  {
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
    <div className="movie-container">
     <BackLink/>
     {movie.map((el) => (
  
      <div key={el.id}>
        <img src={`https://image.tmdb.org/t/p/w200/${el.poster_path}`} alt='' className="movie-poster" />
      <h1 className="movie-title">{el.title} ({el.release_date})</h1>
        <p className="user-score">User Score: {Math.round(el.popularity / 100)}%</p>
        <h2 className="movie-overview">Overview</h2>
        <p>{el.overview}</p>
        <h3 className="movie-genres">Genres</h3>
        <ul>
          {el.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
         </ul>
         <div className="additional-info">
         <h2>Additional information</h2>
         <Link to='cast'  className="link">Cast</Link>
        <Link to='reviews' className="link">Reviews</Link>
        <Outlet />
        </div>
         </div>
     ))}
    </div>
  );
  
}
export default MovieDetails;
  
  
  