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
  flex-direction:column;
  justify-content:center;
  align-items:center;
`; 


export const Content = styled.div`
  background: linear-gradient(180deg, #386CF1 0%, #38ABF1 100%);
  box-sizing: border-box;
  border: 1px solid #000000;
  border-radius:25px;
  width:40%;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  @media(max-width: 960px) {
    width:90%;
  }
`; 

export const LoginContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:100%;
  width: 90%;
  margin-bottom: 30px;

`; 

export const InputText = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 25px;
  border: none;
  font-size: 1.5vw;
  text-align:center;
  @media(max-width: 960px) {
    font-size: 1.8vh;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  width: 100%;
  margin-top: 20px;


  a {
    background: #fff;
    width: 30%;
    font-size: 1.5vw;
    padding: 10px;
    border-radius: 25px;
    border: none;
    font-size: 1.5vw;
    text-align:center;
    margin-left: 10px;

    cursor: pointer;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 1);
    transition: all 0.3s ease 0s;

    :hover{
        background-color: #38ABF1;   
        transform: translateY(-4px);
        box-shadow: 0px 15px 20px rgba(0, 0, 0, 1);
    }

      @media(max-width: 960px) {
        font-size: 1.8vh;
        margin-left: 0;
        width: 95%;
      }
  };

  @media(max-width: 960px) {
    flex-direction:column;
    margin-left: 0;
  }


  
`; 

export const Entrar = styled.button`
  background: #fff;
  width: 30%;
  font-size: 1.5vw;
  padding: 10px;
  border-radius: 25px;
  border: none;
  font-size: 1.5vw;
  text-align:center;
  margin-right: 10px;

  cursor: pointer;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 1);

  transition: all 0.3s ease 0s;

  :hover{
      background-color: #38ABF1;   
      transform: translateY(-4px);
      box-shadow: 0px 15px 20px rgba(0, 0, 0, 1);
  }

  @media(max-width: 960px) {
    font-size: 1.8vh;
    margin-right: 0px;
    width: 95%;
    margin-bottom: 20px;
  }
`; 






