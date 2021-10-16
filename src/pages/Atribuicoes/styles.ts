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

export const TextContainer = styled.div`
  background: linear-gradient(180deg, #386CF1 0%, #38ABF1 100%);
  box-sizing: border-box;
  border: 1px solid #000000;
  border-radius:50px;
  display: flex;
  flex:1;
  width: 90%;
  margin-bottom: 20px;
  flex-direction:row;
  justify-content:center;
  align-items:center;

  @media(max-width: 960px) {
    flex-direction:column;
  }
`;

export const Text = styled.p`

  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  font-size: 20px;
  color: #ffffff;

`; 