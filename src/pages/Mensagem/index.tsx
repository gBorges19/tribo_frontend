import React, {useState} from 'react';
import burroAzaralhado from '../../assets/images/mensagem/burroAzaralhado.svg'
import play from '../../assets/images/mensagem/play.svg'
import {
   Container,
   Content,
   TextContent,
   TestMessageContainer,
   TestMessageContent,
   TestMessageTextArea,
   ContentSVG,
   SVGImage,
   RadioContainer,
   RadioInputGroup,
   RadioInput,
   RadioInputLabel,
   SVGImagePlay
} from './styles';
import * as GC from  '../../components/globalComponents';

import Footer from '../../components/Footer';

import Speech from './Speech'

const Mensagem: React.FC = () => {

   const [message, setMessage] = useState('');

   return (
      <>
         <Container>
            <Content>
               <TextContent>
                  <GC.SubTitle>Vai mandar uma mensagem na live do GauGau?</GC.SubTitle>
                  <GC.Title>Teste sua mensagem aqui!</GC.Title>
               </TextContent>
               <TestMessageContainer>
                  <Content>
                     <GC.Text><strong>Digite sua mensagem e clique no play:</strong></GC.Text>
                     <TestMessageContent>
                        <TestMessageTextArea value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
                        <Speech text={message}/>    
                     </TestMessageContent>
                  </Content>
                     {/*
                     <RadioContainer>
                        <GC.Text><strong>Gênero:</strong></GC.Text>
                        <RadioInputGroup>
                           <RadioInput type="radio"name={"gender"} value={"female"} checked={true}/>
                           <RadioInputLabel>Feminino</RadioInputLabel>
                        </RadioInputGroup>
                        <RadioInputGroup>
                           <RadioInput type="radio"name={"gender"} value={"male"}/>
                           <RadioInputLabel>Masculino</RadioInputLabel>
                        </RadioInputGroup>
                     </RadioContainer>
                     <Content>
                        
                     </Content>
                  */}
               </TestMessageContainer>
            </Content>

            <ContentSVG>
               <SVGImage src={burroAzaralhado} alt="Mula Azaralhada" />
            </ContentSVG>
         </Container>
      <Footer/>
      </>
   )
}

export default Mensagem;