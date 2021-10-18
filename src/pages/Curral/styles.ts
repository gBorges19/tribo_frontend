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
  border-radius: 10px;
  background: linear-gradient(180deg, #386CF1 0%, #38ABF1 100%);
  box-sizing: border-box;
  border: 1px solid #000000;
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
  justify-content: flex-start;
  align-items:center;
  width:100%;
  height:400px;
  padding: 15px;

  @media(max-width: 960px) {
    height:300px;
  }
`; 

export const PerfilBox = styled.div`
  display: flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  width:98%;
  height:100px;
  padding: 10px;
  margin-bottom: 10px;
`; 

export const PerfilImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius:50%;
  border: 1px solid #000;
  background: #fff;
  object-fit: cover;
`; 

export const PerfilTextBox = styled.div`
  flex:1;
  display: flex;
  flex-direction:column;
  justify-content:space-evenly;
  margin-left: 10px;
  align-items: flex-start;
  height:100px;
`; 

export const PerfilText = styled.div`
  color: #9147FF;
  font-size: 1.5vw;
  font-weight: bold;
  margin-left: 10px;
`; 

export const DescriptionBox = styled.div`
  display: flex;
  height: 200px;
  flex-direction:column;
  align-items:flex-start;
  width:98%;
  padding: 10px;
  overflow-y:auto;
`; 

export const DescriptionText = styled.h1`
  color: #000;
  font-size: 1.5vw;
  font-weight: bold;
  margin-left: 10px;
  scrollbar-color: #000;
  @media(max-width: 960px) {
    font-size:  2vh;
  }
`; 

export const DescriptionLabel = styled.h1`
  color: #323232;
  font-size: 1.25vw;
  margin-top: 10px;
  margin-bottom: auto;
  @media(max-width: 960px) {
    font-size: 1.5vh;
  }
`; 

export const TagsAndInBox = styled.div`
  margin-top: 10px; 
  display: flex;
  height: 50px;
  flex-direction:row;
  width:98%;
  align-items:center;
  justify-content:center;
`; 

export const TagsContent = styled.div`
  color: #c3c3c3;
  flex:1;
  height: 50px;
  display: flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  overflow-y:hidden;
  margin-right: 5px;
`; 

export const InImg = styled.img`
  cursor: pointer;
  width: 45px;
  height: 45px;
  border-radius:5px;
  background: #fff;
  @media(max-width: 960px) {
    width: 30px;
    height: 30px;
  }
`; 



