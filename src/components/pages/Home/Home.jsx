import React, { useEffect, useState } from 'react'
import { TrendingFilm } from './Home.styled'
import { trendingMovieFetch } from 'components/services/trendingMovie';
export function Home  ()  {
  const [trendingMovies, setTrendingMovies] = useState([]);
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
      <>
      {
       trendingMovies?.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
       ))
      }
      </>
    </div>)
}
