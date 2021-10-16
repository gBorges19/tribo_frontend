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


`