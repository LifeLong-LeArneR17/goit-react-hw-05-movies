import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Movies } from './pages/Movies/Movies';
import { MovieDetails } from './pages/MovieDetails/MovieDetails';
import { Cast } from './pages/Cast/Cast';
import { Reviews } from './pages/Reviews/Reviews';
import { HomePageStyled } from './App.styled';
import { HomeStyled } from './App.styled';
import { MoviesStyled } from './App.styled';
import React from 'react';
export const App = () => {
  return (
    <>
    <nav>
     <HomePageStyled>
        <HomeStyled to='/'>Home</HomeStyled>
        <MoviesStyled to='/movies'>Movies</MoviesStyled>
     </HomePageStyled>
    </nav>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movies' element={<Movies/>}></Route>
        <Route path='/movies/:movieId' element={MovieDetails}>
          <Route path='cast' element={Cast}></Route>
          <Route path='reviews' element={Reviews}></Route>
        </Route>
      </Routes>
    </>
  );
};
