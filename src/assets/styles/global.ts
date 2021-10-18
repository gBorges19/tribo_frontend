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

  ::-webkit-scrollbar{
  width: 10px;
  }

  ::-webkit-scrollbar-track{
    background: #0B64E1;
    border-radius: 0px;
  }

  ::-webkit-scrollbar-thumb{
    background-color: #78CCFF;
    border-radius: 5px;
  }
  
  body{
    ::-webkit-scrollbar{
      width: 10px;
    }

    ::-webkit-scrollbar-track{
      background: #0B64E1;
      border-radius: 0px;
    }

    ::-webkit-scrollbar-thumb{
      background-color: white;
      border-radius: 5px;
}
  }


`;