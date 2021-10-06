import styled from 'styled-components';

import background_home from '../../assets/images/home/background_home.png'


export const Container = styled.div`
  height: 80vh;
  background-color: #fff;
  background-image: url(${background_home});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  flex:1;
  display: flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;

  @media(max-width: 960px) {
    flex-direction:column;
  }
`; 


export const Content = styled.div`
  flex:1;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:100%;
  @media(max-width: 960px) {
        display:none;
  }
`; 

export const TextContent = styled.div`
  flex:1;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:100%;
  @media(max-width: 960px) {
        width:100%;
  }
`; 



export const SVGImgage = styled.img`
  display:flex;
  size: contain;
  width: 100%;
`; 