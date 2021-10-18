import React from 'react';
//import Header from '../../components/Header';
import Footer from '../../components/Footer';

import * as GC from  '../../components/globalComponents';

import {
    Container,
    Content
 } from './styles';


const SobreNos: React.FC = () => {

    return (

        <>
         <Container>
            <GC.Title>SOBRE NÓS</GC.Title>
            <Content>
               <GC.Text>Assim como vocês, também somos mulas da tribo! Este espaço é uma iniciativa criada pensando em dar visibilidade para os participantes da comunidade mulística que habitam o chat das lives do Gaules mais conhecido como "Cabeça de Nós Todos".</GC.Text>
               <GC.Text>Aqui você tem oportunidade de divulgar seu conteúdo e seu perfil profissional.</GC.Text>
               <GC.Text>Aproveite e não esqueça de manter seu cadastro atualizado!</GC.Text>
               <GC.Text>Caso queira falar conosco, não deixe de entrar em contato.</GC.Text>
               <GC.Text>Nossa intenção é ajudar! Se de alguma maneira nós conseguirmos ajudar pelo menos um, já valeu a pena!</GC.Text>
               
            </Content>
         </Container>
      <Footer/>
        </>

   )
}

export default SobreNos;