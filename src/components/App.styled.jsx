import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomePageStyled = styled.div`
      background-color: black;
      display:flex;
      justify-content: center;
      align-items: center;
      gap: 40px;
`;

export const HomeStyled = styled(Link)`
   color: white;
   font-size: 60px;
   text-decoration: none;
`;


export const MoviesStyled = styled(Link)`
   color: white;
   font-size: 60px;
   text-decoration: none;
`;