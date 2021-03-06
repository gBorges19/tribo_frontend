import styled from 'styled-components';

export const Footer = styled.div`
  width: 100vw;
  background: linear-gradient(90deg, #0B64E1 -3.52%, rgba(56, 171, 241, 0.51) 100%);
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 15px;
    @media(max-width: 1150px) {
        flex-direction: column;
        position: relative;
    }
    @media(min-width: 1150px) {
        height: 10vh;
    }
`;

export const Button = styled.a`

    color: #fff;
    text-decoration: none;
    position: relative;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
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
export const Email = styled.a`

    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;


`