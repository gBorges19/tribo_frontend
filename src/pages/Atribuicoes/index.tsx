import React from 'react';

import {
   PageContainer,
   Container,
   Content,
   ContentList,
   CardsGrid,
   Card,
   SVGImage
} from './styles';
import * as GC from  '../../components/globalComponents';

import Footer from '../../components/Footer';


import donkey_right from '../../assets/images/home/donkey_right.svg';
import burroAzaralhado from '../../assets/images/mensagem/burroAzaralhado.svg'
import play from '../../assets/images/mensagem/play.svg'
import mulaDance from '../../assets/images/secuide/mulaDance.svg'

const Atribuicoes: React.FC = () => {

   return (
      <PageContainer>
         <Container>
            <Content>
                  <GC.Title>ATRIBUIÇÕES</GC.Title>
                  <GC.Text marginTop={"0px"} marginBottom={"10px"}>Resources by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></GC.Text>
                  <GC.Text marginTop={"0px"} marginBottom={"10px"}>and by <a href="https://www.pixabay.com/" title="Freepik">Pixabay</a> from <a href="https://www.pixabay.com/" title="Pixabay">www.pixabay.com</a></GC.Text>
            </Content>
            <ContentList>
               <CardsGrid>
                  <Card>
                     <SVGImage src={donkey_right} alt=""/>               
                  </Card>
                  <Card>
                     <SVGImage src={burroAzaralhado} alt=""/>               
                  </Card>
                  <Card>
                     <SVGImage src={mulaDance} alt=""/>               
                  </Card>
                  <Card>
                     <SVGImage src={play} alt=""/>               
                  </Card>
               </CardsGrid>
            </ContentList>
         </Container>
         <Footer/>
      </PageContainer>
   )
}

export default Atribuicoes;