import React from 'react'
import { useEffect, useRef, useState } from 'react';
import { searchMovieFetch } from 'components/services/trendingMovie';
import { Loader } from 'components/Loader/Loader';
import { Wrapper,Form, Input, SubmitButton, MovieList, MovieItem, MovieImage } from './Movies.styled';
function Movies ()  {
const [movie, setMovie] = useState('');
const [movieList, setMovieList] = useState(null);
const [loader, setLoader] = useState('idle');
const prevQueryRef = useRef('');

const handleChange = (event) => {
  setMovie(event.target.value);
}


const handleSubmit = (event) => {
  event.preventDefault();
  fetchDataMovie();
  setLoader('loading');
  setMovie('');
}

useEffect(() => {
  if (loader === 'loaded' && movieList.length === 0) {
    setLoader('idle');
  }
}, [loader, movie, movieList]); // Добавлен movieList.length



const fetchDataMovie = async () => {
  try {
    if (prevQueryRef.current !== movie) {
      const response = await searchMovieFetch(movie);
      setMovieList(response);
      setLoader('loaded');
      prevQueryRef.current = movie;
      console.log(response);
    }
    
  } catch (error) {
    console.log(error.message)
  }
}



  return (
    <Wrapper>
      {loader === 'loading' ? <Loader /> : null}
   <Form onSubmit={handleSubmit}>
   <label>
    <Input type="text" placeholder="Enter movie" value={movie} onChange={handleChange}/>
   </label>
   <SubmitButton type="submit">Submit</SubmitButton>
   </Form>
   <MovieList>
      {movieList?.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        movieList?.map((el) => (
          <MovieItem key={el.id}>
            <MovieImage
              src={
                el.poster_path
                  ? `https://image.tmdb.org/t/p/w200/${el.poster_path}`
                  : 'https://cdn-icons-png.flaticon.com/512/4054/4054617.png'
              }
              alt=""
            />
            <p>{el.original_title ? el.original_title : "Don't title"}</p>
          </MovieItem>
        ))
      )}
    </MovieList>
    </Wrapper>
  )
}

export default Movies;

