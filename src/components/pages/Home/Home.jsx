import React, { useEffect, useState } from 'react'
import { TrendingFilm } from './Home.styled'
import { trendingMovieFetch } from 'components/services/trendingMovie';
import { MovieItemList } from './Home.styled';
import {MovieTitle} from './Home.styled'
export function Home  ()  {
  const [trendingMoviesData, setTrendingMovies] = useState([]);
  useEffect(()=> {
    const fetchData = async() => {
   try{
      const result = await trendingMovieFetch();
      setTrendingMovies(result)
   } catch {

   }
    }
    fetchData()
  }, []);


  return (
    <div>
      <TrendingFilm>TRENDING TODAY</TrendingFilm>
      <MovieItemList>
      {
       trendingMoviesData.map((movie) => (
        <li key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} alt=''></img>
          <MovieTitle to={`movies/${movie.id}`}>{movie.title}
          <img src="" alt=""></img>
          </MovieTitle>
        </li>
       ))
      }
      </MovieItemList>
    </div>)
}
