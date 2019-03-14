import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    text-rendering: optimizeLegibility;
  }

  body {
    font-family: 'Nunito', cursive, sans-serif;
    background-color: #f5f9fa;
    font-size: 14px;
  }

  button {
    cursor: pointer;
  }
`;
