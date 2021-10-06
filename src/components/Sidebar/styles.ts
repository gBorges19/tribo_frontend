import styled from 'styled-components';
import {Link} from 'react-router-dom'

interface SidebarNavProps {
    sidebar: boolean;
}

export const Nav = styled.div`
  height: 10vh;
  background: linear-gradient(90deg, #0B64E1 -3.52%, rgba(56, 171, 241, 0.51) 100%);
  position: sticky;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 15px;

  img {
    @media(max-width: 1150px) {
        width:25%;
    }
  }
`;

export const NavSpacer = styled.div`
    background: #15171c;
    height: 10vh;
    flex:1;
    display:flex;
    justify-content: center;
    align-items: center;
`;

export const NavIcon = styled(Link)`
    margin-left: auto;
    margin-right: 1rem;
    font-size: 2rem;
    height: 10vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media(min-width: 1150px) {
        display:none;
    }
`;

export const NavTitle = styled.h1`
    font-size: 2rem;
    color:#fff;
`;

export const NavLogo = styled.img`
  margin-left: auto;
  height: 70px;
  margin-right: 2rem;
  padding: 5px;
  justify-self:flex-end;
`;


export const SidebarNav = styled.nav<SidebarNavProps>`
    background: #15171c;
    background: linear-gradient(90deg, #0B64E1 -3.52%, rgba(56, 171, 241, 0.51) 100%);
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({sidebar}) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
`;

export const SidebarWrap = styled.div`
    width: 100%;
    background: linear-gradient(180deg, #0048FF 15.62%, rgba(56, 108, 241, 0.94405) 51.04%, rgba(56, 108, 241, 0.9) 86.98%);
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

    @media(max-width: 1150px) {
        display:none;
    }

`