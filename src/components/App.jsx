import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from './Loader/Loader';
const Home = lazy(() => import("./pages/Home/Home"));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const Cast = lazy(() => import('./pages/Cast/Cast'));
const Reviews = lazy(() => import('./pages/Reviews/Reviews'));
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
export function App() {
  return (
   <main>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
   </main>
  );
}
