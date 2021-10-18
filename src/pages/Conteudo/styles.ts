import styled from 'styled-components';

export const PageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`; 

export const Container = styled.div`
  min-height: 80vh;
  flex:1;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`; 

export const Content = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`; 


export const ContentList = styled.div`
  flex:1;
  background: linear-gradient(180deg, #386CF1 0%, #38ABF1 100%);
  box-sizing: border-box;
  border: 1px solid #000000;
  border-radius: 10px;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:95vw;
  margin-bottom: 15px;
`; 

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 20px;
  gap: 20px;
  width: 100%;
  height: 100%;

  @media(max-width: 960px) {
    display:  flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`; 

export const Card = styled.div`
  background: #fff;
  border: 2px solid #000;
  border-radius:5px;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100%;
  
  padding: 15px;
  @media(max-width: 960px) {
    justify-content:space-between;
  }
`; 


export const VideoBox = styled.div`
  background: #c3c3c3;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:95%;
  height:250px;
  margin-bottom:auto;
  border: 2px solid #000;

  @media(max-width: 960px) {
    height:200px;
    width:200px;
  }
`; 


export const DescriptionBox = styled.div`
  margin: 10px 5px 5px 5px;
  display: flex;
  flex:1;
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;
  width:95%;

  @media(max-width: 960px) {
    margin: 10px;
    flex-direction: column;
    height:200px;
    width:200px;
  }
`; 

export const DescriptionText = styled.a`
  color: #9147FF;
  font-size: 1.5vw;
  font-weight: bold;
  margin-left: 10px;

  @media(max-width: 960px) {
    font-size: 2vh;
    margin:0;
  }
`; 


