import React from "react";
import { Link, useLocation } from "react-router-dom"; 
import styled from "styled-components";
const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 16px; /* Изменим отступы для более крупных кнопок */
  background-color: orangered; /* Цвет фона при наведении */
  color: white; /* Цвет текста при наведении */
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  border: 1px solid orangered; /* Граница для кнопки */
  border-radius: 4px; /* Закругление углов */
  transition: background-color 0.3s, color 0.3s; /* Плавные анимации при наведении */
  margin: 20px;
  :hover {
    background-color: transparent; /* Убираем фон при наведении */
    color: orangered; /* Цвет текста при наведении */
  }
`;

export const BackLink = () => {
    const location = useLocation(); 
    return (
      <StyledLink to={location.state?.from || "/"}>
        Go back
      </StyledLink>
    );
  };
