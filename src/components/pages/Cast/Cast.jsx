import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CatsFetch } from 'components/services/trendingMovie';
import { CastUl, CastUlImg, CastP, CastLi } from './Cast.styled';
function Cast() {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCatsDetails = async () => {
      try {
        const result = await CatsFetch(movieId);
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
      <CastUl>
        {movie.map((el) => (
          <CastLi key={el.id}>
            <div>
              <CastUlImg
                src={
                  el.profile_path
                    ? `https://image.tmdb.org/t/p/w200/${el.profile_path}`
                    : 'https://cdn-icons-png.flaticon.com/512/4054/4054617.png'
                }
        
                alt={el.original_name}
              />
              <CastP>{el.original_name}</CastP>
              <CastP> Character: {el.character}</CastP>
            </div>
          </CastLi>
        ))}
      </CastUl>
    </div>
  );
            }
export default Cast;