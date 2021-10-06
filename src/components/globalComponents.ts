import styled from 'styled-components';

interface ITextProps {
  marginTop?:string;
  marginLeft?: string;
  marginBottom?: string;
  marginRight?: string;
}

export const WelcomeTitle = styled.h1<ITextProps>`
  color: #fff;
  margin-top: ${props => props.marginTop? props.marginTop : "25px"};
  margin-left: ${props => props.marginLeft? props.marginLeft : "0px"};
  margin-bottom: ${props => props.marginBottom? props.marginBottom : "25px"};
  margin-right: ${props => props.marginRight? props.marginRight : "0px"};
  text-align: center;
  font-weight: bold;
  font-size: 3vw;
  text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
  @media(max-width: 960px) {
    font-size: 3vh;
  }
`; 

export const Title = styled.h1<ITextProps>`
  color: #fff;
  margin-top: ${props => props.marginTop? props.marginTop : "25px"};
  margin-left: ${props => props.marginLeft? props.marginLeft : "0px"};
  margin-bottom: ${props => props.marginBottom? props.marginBottom : "25px"};
  margin-right: ${props => props.marginRight? props.marginRight : "0px"};
  font-weight: bold;
  font-size: 3vw;
  text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
  @media(max-width: 960px) {
    font-size: 3vh;
    margin: 10px;
  }
`; 

export const SubTitle = styled.h1<ITextProps>`
  color: #fff;
  margin-top: ${props => props.marginTop? props.marginTop : "25px"};
  margin-left: ${props => props.marginLeft? props.marginLeft : "0px"};
  margin-bottom: ${props => props.marginBottom? props.marginBottom : "25px"};
  margin-right: ${props => props.marginRight? props.marginRight : "0px"};
  text-align: center;
  font-weight: bold;
  font-size: 2vw;
  text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
  @media(max-width: 960px) {
    font-size: 2vh;
    margin: 10px;
  }
`; 

export const Text = styled.h1<ITextProps>`
  color: #fff;
  margin-top: ${props => props.marginTop? props.marginTop : "25px"};
  margin-left: ${props => props.marginLeft? props.marginLeft : "0px"};
  margin-bottom: ${props => props.marginBottom? props.marginBottom : "25px"};
  margin-right: ${props => props.marginRight? props.marginRight : "0px"};
  text-align: center;
  font-size: 1.5vw;

  strong{
    font-weight: bold;
  }

  @media(max-width: 960px) {
    font-size:  2vh;
  }
`; 

export const TextSecondary = styled.h1<ITextProps>`
  color: #000;
  margin-top: ${props => props.marginTop? props.marginTop : "10px"};
  margin-left: ${props => props.marginLeft? props.marginLeft : "0px"};
  margin-bottom: ${props => props.marginBottom? props.marginBottom : "10px"};
  margin-right: ${props => props.marginRight? props.marginRight : "0px"};
  text-align: center;
  font-weight: bold;
  font-size: 1.5vw;
  @media(max-width: 960px) {
    font-size:  1.5vh;
  }
`; 