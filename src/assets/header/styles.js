import styled from 'styled-components';


export const Header = styled.header`

  z-index: 2;
  background: #78CCFF;
  position: sticky;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin-bottom: 10px;

`
export const Button = styled.a`

    color: black;
    text-decoration: none;
    position: relative;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    margin: 5px 30px 5px 30px;
    border: none;
    background: none;
    :hover{
        cursor: pointer;
        
    }
    ::before{
      transform: scaleX(0);
      transform-origin: bottom right;
    }
    :hover::before {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
    ::before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: 100px;
    top: 0; right: 0; bottom: 0; left: 0;
    inset: 0 0 0 0;
    background: #9147ff;
    z-index: -1;
    transition: transform .3s ease;
    }

`