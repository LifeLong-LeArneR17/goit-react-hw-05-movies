import styled from 'styled-components';
export const CastUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Задаем 4 столбцов */
  gap: 20px;
  list-style: none;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

export const CastLi = styled.li`
   display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const CastUlImg = styled.img`
   width: 200px;
   height: 300px;
`;


export const CastP = styled.p`
 font-size: 15px;
  color: black;
  margin: 5px 0;
  `;