import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { reviewsFetch } from 'components/services/trendingMovie';
import { ContainerWrrap, Title, ReviewList, ReviewItem, Username, Content } from './Reviews.styled';

function Reviews  ()  {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
 const fetchData = async () => {
  try {
    const result = await reviewsFetch(movieId)
    setMovie(result)
    } catch(error) {
     console.log(error.message)
    }
 }
 fetchData()
  }, [movieId])

  return (
    <ContainerWrrap>
      <ReviewList> 
      <Title>Reviews</Title>
      {movie.map((el) => (
        <ReviewItem key={el.id}>
          <Username>{el.author_details.username}</Username>
          <Content>{el.content}</Content>
        </ReviewItem>
      ))}
      </ReviewList>
    </ContainerWrrap>
  );
}

export default Reviews;



