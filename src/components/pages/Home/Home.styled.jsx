import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const TrendingFilm = styled(Link)`
   margin-top: 60px;
   justify-content:center;
   align-items: center;
   font-size: 40px;
   text-transform: uppercase;
   text-align: center;
   color: #DEB887;
   text-decoration: none;
   display: flex;
`;

export const MovieItemList = styled.ul`
  display:flex;
  gap: 30px;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
  align-items: center;
`;


export const MovieTitle = styled(Link)`
 text-decoration: none;
  font-size: 20px;
  color: black;
  text-align: center;
  display: block;
  margin-top: 10px;
  &:hover {
    color: orange;
  }
`;
