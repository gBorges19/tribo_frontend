import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    outline: 0;
  }

  body{
    background: #78CCFF;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, label,option, input, strong {
    font-weight: 500;
    font-family: Arial, Helvetica, sans-serif
  }

  a {
    text-decoration:none;
    font-family: Arial, Helvetica, sans-serif;
    color: #000;
  }

  button{
    cursor: pointer;
  }

`;