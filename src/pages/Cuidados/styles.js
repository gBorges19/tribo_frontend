import styled from 'styled-components';

export const GlobalContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    max-width: 1400px;
    
`

export const RowContainer = styled.div`

  display: flex;
  flex-direction: row;
  @media(max-width: 1150px) {
        flex-direction: column;
    }
  


`

export const ContainerTitle  = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;

`

export const ContainerMensagem = styled.div`

  display: flex;
  flex-direction: column;
  margin: 30px 40px 50px 40px;
  justify-content: center;
  align-items: center;
  @media(max-width: 1150px) {
        margin: 0px 0px 50px 0px;
    }

`

export const ContainerImagem = styled.div`

  display: flex;
  flex-direction: column;
  margin: 30px 40px 50px 40px;
  max-width: 700px;
  align-items: center;
  justify-content: center;

`

export const Title = styled.h1`

    color: white;
    font-family: 'Roboto', sans-serif;
    text-decoration: bold;
    font-size: 32px;
    margin-bottom: 15px;
    text-transform: uppercase;
    @media(max-width: 1150px) {
        margin-top: 20px;
        margin-bottom: 25px;
    }


`

export const CardMensagem = styled.div`

    display: flex;
    flex-direction: column;
    border-radius: 50px;
    background-color: #78CCFF;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
    width: 568px;
    padding: 30px;
    @media(max-width: 1150px) {
        width: 350px;
    }


`

export const Text = styled.span`

    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    color: #000000;


`
export const Number = styled.span`

    font-size: 150px;
    color: white;


`

export const Link = styled.a`

    text-decoration: none;
    font-size: 18px;
    color: #000000;
    margin: 20px;

`

export const Imagem = styled.img`

    width: 100%;
    @media(max-width: 1150px) {
        width: 70%;
    }



`