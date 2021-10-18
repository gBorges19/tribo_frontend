import React from 'react';
import mulaDance from '../../assets/images/secuide/mulaDance.svg'

import {
   Container,
   Content,
   TextContent,
   TextContainer,
   SVGImage,
   Text188
 
} from './styles';
import * as GC from  '../../components/globalComponents';

import Footer from '../../components/Footer';

const SeCuide: React.FC = () => {

   return (
      <>
         <Container>
            <Content>
               <TextContent>
                  <GC.Title>SE CUIDE MULA!</GC.Title>
               </TextContent>
               <TextContainer>
                  <GC.Text marginTop={"10px"} marginBottom={"10px"}>
                  Se você anda se sentindo frustrado, sem esperança ou sozinho, <strong>procure ajuda!</strong> A melhor ajuda sempre será a de um profissional! Caso esteja em alguma situação extrema, <strong>ligue</strong>
                  </GC.Text>
                  <Text188>188</Text188>
                  <GC.Text marginTop={"10px"} marginBottom={"10px"}>
                     Para mais informações, acesse:
                  </GC.Text>
                  <GC.Text marginTop={"10px"} marginBottom={"10px"}>
                     https://www.cvv.org.br/ligue-188/
                  </GC.Text>
               </TextContainer>
            </Content>
            <Content>
               <SVGImage src={mulaDance} alt="Mula Dance" />
            </Content>
         </Container>
      <Footer/>
      </>
   )
}

export default SeCuide;