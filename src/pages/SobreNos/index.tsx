import React from 'react';
//import Header from '../../components/Header';
import Footer from '../../components/Footer';

import * as GC from  '../../components/globalComponents';

import {
    Container,
    Content,
    TextContainer,
    Text,
  
 } from './styles';


const SobreNos: React.FC = () => {

    return (

        <>
         <Container>
            <Content>
            <GC.Title>SOBRE NÓS!</GC.Title>
                <TextContainer>
                    <Text>Somos uma iniciativa criada pensando em fornecer um espaço para as mulas que habitam o chat das lives do Gaules. Se de alguma maneira conseguirmos ajudar uma dessas mulas, a iniciativa valeu a pena!</Text>
                </TextContainer>
            </Content>
         </Container>
      <Footer/>
        </>

   )
}

export default SobreNos;