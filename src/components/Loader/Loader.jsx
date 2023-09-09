import { ThreeDots } from 'react-loader-spinner';
import React from 'react';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Установите высоту на весь экран */
  background-color: rgba(0, 0, 0, 0.5); /* Добавьте полупрозрачный фон (по желанию) */
`;

export const Loader = () => {
  return (
    <LoaderWrapper>
      <ThreeDots
        height="100"
        width="100"
        radius="10"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </LoaderWrapper>
  );
};
