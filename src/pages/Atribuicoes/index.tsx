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


const Atribuicoes: React.FC = () => {

    return (

        <>
         <Container>
            <Content>
            <GC.Title>ATRIBUIÇÕES</GC.Title>
                <TextContainer>
                    <Text>
                    Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                    </Text>
                </TextContainer>
            </Content>
         </Container>
      <Footer/>
        </>

   )
}

export default Atribuicoes;