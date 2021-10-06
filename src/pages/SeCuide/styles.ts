import styled from 'styled-components';

export const Container = styled.div`
  height: 80vh;
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
  height: 80vh; 
  flex:1;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`; 

export const TextContent = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`; 

export const TextContainer = styled.div`
  width: 90%;
  padding: 2.5%;
  background: linear-gradient(180deg, #386CF1 0%, #38ABF1 100%);
  box-sizing: border-box;
  border: 1px solid #000000;
  border-radius:50px;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  @media(max-width: 960px) {
    padding: 5%;
  }

`; 

export const Text188 = styled.h1`
  font-size: 12vw;
  font-weight: bold;
`; 

export const SVGImage = styled.img`
  display:flex;
  size: contain;
  width: 100%;
  @media(max-width: 960px) {
    width: 90%;
  }
`; 
