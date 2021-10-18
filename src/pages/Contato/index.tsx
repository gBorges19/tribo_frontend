import React from 'react';
//import Header from '../../components/Header';
import Footer from '../../components/Footer';

import * as GC from  '../../components/globalComponents';

import {
    Container,
    Content,
    Email,
 } from './styles';


const Contato: React.FC = () => {

    return (

        <>
         <Container>
            <GC.Title>CONTATO</GC.Title>
            <Content>
               <GC.Text>Caso queira entrar em contato conosco, mande um email para </GC.Text>
               <Email href="mailto:muladatribo@gmail.com">muladatribo@gmail.com</Email>
               <GC.Text>que iremos te responder o mais rápido possível!</GC.Text>
            </Content>
         </Container>
      <Footer/>
        </>

   )
}

export default Contato;