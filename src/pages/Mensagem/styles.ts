import styled from 'styled-components';

export const Container = styled.div`
  height: 80vh;
  display: flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  margin-bottom: px;
  @media(max-width: 960px) {
    flex-direction:column;
    justify-content:space-between;
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
    flex-direction:column;
    width: 100%;
  }
`;

export const ContentSVG = styled.div`
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
`; 

export const TestMessageContainer = styled.div`
  background: linear-gradient(180deg, #386CF1 0%, #38ABF1 100%);
  box-sizing: border-box;
  border: 1px solid #000000;
  border-radius:50px;
  display: flex;
  flex:1;
  width: 90%;
  margin-bottom: 40px;
  flex-direction:row;
  justify-content:center;
  align-items:center;

  @media(max-width: 960px) {
    flex-direction:column;
  }
`; 

export const SVGImage = styled.img`
  align-self:flex-end;
  width: 100%;
  height: 100%;
  padding: 10px;

`; 

export const RadioContainer = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
`;

export const RadioInputGroup = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  width: 40%;
  margin-bottom: 5px;
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

export const TestMessageContent= styled.div`
  flex:1;
  display: flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  width: 80%;
  margin-bottom: 30px;
  @media(max-width: 960px) {
    flex-direction:column;
  }
`; 

export const TestMessageTextArea = styled.textarea`
  background: #fff;
  padding: 20px;
  display: flex;
  width: 100%;
  height:200px;
  border-radius:20px;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  margin-right: 20px;
  font-size: 1.5vw;

  @media(max-width: 960px) {
    font-size: 1.5vh;
    flex-direction:column;
    height:100px;
    margin-right: 0px;
    margin-bottom: 30px;
  }
`; 

export const SVGImagePlay = styled.img`
  display:flex;
  height:200px;
  size: contain;
  transition: all 0.3s ease 0s;
    :hover{
        cursor: pointer;
        transform: translateY(-10px);
        box-shadow: 0px 15px 20px rgba(0, 0, 0, 0);
    }

    @media(max-width: 960px) {
      height:100px;

    }
`; 