import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  body {
    width: 100%;
    -webkit-font-smoothing: antialiased;
    background: linear-gradient(#272727, #222)
  }

  html, body, #root {
    height: 100%;
  }

  body, input, button, textarea {
    font-family: 'Roboto', Verdana, Geneva, Tahoma, sans-serif;
    font-size: 14px;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
