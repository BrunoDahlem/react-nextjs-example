import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    scroll-behavior: smooth;
  }
  html {
    font-size: 62.5%; /* para usar rem como pixel */
  }
`;
