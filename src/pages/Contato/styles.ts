import styled from 'styled-components';

export const Container = styled.div`
  height: 80vh;
  flex:1;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  @media(max-width: 960px) {
    flex-direction:column;
  }
`; 

export const Content = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  flex:1;
  width: 90%;
  border: 1px solid #000000;
  border-radius:50px;
  background: linear-gradient(180deg, #386CF1 0%, #38ABF1 100%);
  margin-bottom: 20px;  
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
  font-weight: 700;
  color: #ffffff;

`; 

export const Email = styled.a`

    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    margin: 10px;
    :hover{
      color: #9147ff;
    }
    font-size: 1.5vw;

    strong{
      font-weight: bold;
    }

  @media(max-width: 960px) {
    font-size:  2vh;
  }

`