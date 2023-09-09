import React from 'react';
import { Outlet } from 'react-router-dom';
import { HomePageStyled } from './App.styled';
import { HomeStyled } from './App.styled';
import { MoviesStyled } from './App.styled';
import { Suspense } from 'react';

function SharedLayout  ()  {
  return (
    <>
      <nav>
        <HomePageStyled>
          <HomeStyled to="/">Home</HomeStyled>
          <MoviesStyled to="movies">Movies</MoviesStyled>
        </HomePageStyled>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;