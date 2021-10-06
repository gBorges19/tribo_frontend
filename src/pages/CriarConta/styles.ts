import styled from 'styled-components';

export const Container = styled.div`
  background-color: #78CCFF;
  flex:1;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`; 


export const Content = styled.div`
  width:100%;
  border-radius:25px;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`; 

export const Section = styled.div`
  background: linear-gradient(180deg, #386CF1 0%, #38ABF1 100%);
  box-sizing: border-box;
  border: 1px solid #000000;
  border-radius: 25px;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width: 90%;
  margin: 20px 0 20px 0;
  padding: 20px;
  padding-bottom: 40px;
`; 

export const SectionContent = styled.div`
  display: flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  width: 100%;
`; 

export const InputBox = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width: 100%;
  margin: 10px;
`; 

export const InputText = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 25px;
  border: none;
  font-size: 1.5vw;
  text-align:center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  width: 100%;
  margin: 20px 0 40px 0;
`; 

export const Criar = styled.button`
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
`; 

export const RadioInpuBox = styled.div `
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content:space-around;
  width: 100%;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 25px;
  box-shadow:0px 0px 0px 1px #fff inset;
`;

export const RadioInputGroup = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const RadioInput = styled.input`
  height: 20px;
  width: 20px;
  background: #f00; 

`;

export const RadioInputLabel = styled.label`
  color: #fff;
  font-size: 1.5vw;
  margin-left: 2px;

`;




