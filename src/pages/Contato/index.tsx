import React from 'react';
//import Header from '../../components/Header';
import Footer from '../../components/Footer';

import * as GC from  '../../components/globalComponents';

import {
    Container,
    Content,
    Email,
    Text,
  
 } from './styles';


const Contato: React.FC = () => {

    return (

        <>
         <Container>
            <Content>
            <GC.Title>CONTATO</GC.Title>
            <Text>Entre em contato através do email:</Text>
            <Email href="mailto:muladatribo@gmail.com">muladatribo@gmail.com</Email>
            </Content>
         </Container>
      <Footer/>
        </>

   )
}

export default Contato;