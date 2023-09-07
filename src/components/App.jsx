import React from 'react';
import {Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Movies } from './pages/Movies/Movies';
import { MovieDetails } from './pages/MovieDetails/MovieDetails';
import { Cast } from './pages/Cast/Cast';
import { Reviews } from './pages/Reviews/Reviews';
import { HomePageStyled } from './App.styled';
import { HomeStyled } from './App.styled';
import { MoviesStyled } from './App.styled';

export function App () {
  return (
    <>
    <nav>
     <HomePageStyled>
        <HomeStyled to='/'>Home</HomeStyled>
        <MoviesStyled to='movies'>Movies</MoviesStyled>
     </HomePageStyled>
    </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='movies/:movieId' element={<MovieDetails/>}>
          <Route path='cast' element={<Cast/>}/>
          <Route path='reviews' element={<Reviews/>}/>
        </Route>
      </Routes>
    </>
  );
};
