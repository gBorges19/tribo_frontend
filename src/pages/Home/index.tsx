import React from 'react';
import donkey_left from '../../assets/images/home/donkey_left.svg'
import donkey_right from '../../assets/images/home/donkey_right.svg'

import {Container, Content, SVGImgage, TextContent} from './styles';
import * as GC from  '../../components/globalComponents';

import Footer from '../../components/Footer';

const Home: React.FC = () => {

   return (
      <>
         <Container>
            <Content>
               <SVGImgage src={donkey_left} alt="Mula esquerda" />
            </Content>
            <TextContent>
               <GC.WelcomeTitle>SEJA BEM VINDX!</GC.WelcomeTitle>
               <GC.WelcomeTitle>SE VOCÊ É UMA MULA DA TRIBO,</GC.WelcomeTitle>
               <GC.WelcomeTitle>VOCÊ ESTÁ NO LUGAR CERTO!!!</GC.WelcomeTitle>
            </TextContent>
            <Content>
               <SVGImgage src={donkey_right} alt="Mula esquerda" />
            </Content>
         </Container>
      <Footer/>
      </>
   )
}

export default Home;