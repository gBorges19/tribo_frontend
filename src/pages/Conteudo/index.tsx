import React,{useState,useEffect} from 'react';

import {
   PageContainer,
   Container,
   Content,
   ContentList,
   CardsGrid,
   Card,
   VideoBox,
   DescriptionBox,
   DescriptionText
} from './styles';
import * as GC from  '../../components/globalComponents';

import Footer from '../../components/Footer';

import {fakeUsersData} from '../../assets/fakeData';

const Conteudo: React.FC = () => {


   return (
      <PageContainer>
         <Container>
            <Content>
                  <GC.Title>CONTEÚDOS DAS MULAS</GC.Title>
                  <GC.SubTitle marginTop={"0px"} marginBottom={"10px"}>Se você é uma mula e tem um canal, não deixe de divulgá-lo!</GC.SubTitle>
                  <GC.SubTitle marginTop={"0px"} marginBottom={"10px"}>Agora, se você é uma mula sem canal, aproveite!</GC.SubTitle>
            </Content>
            <ContentList>
               <CardsGrid>
               {fakeUsersData.map((user)=>(
                  <Card key={user.id}>
                     <VideoBox dangerouslySetInnerHTML={{__html: user.videoEmbbed}}>
                     </VideoBox>
                     <DescriptionBox>
                        <GC.TextSecondary marginTop={"0px"} marginBottom={"0px"}>
                           Vídeo:
                        </GC.TextSecondary>
                        <DescriptionText target={"_blank"} href={user.videoUrl}>{user.videoTitle}</DescriptionText> 
                     </DescriptionBox>
                     <DescriptionBox>
                        <GC.TextSecondary marginTop={"0px"} marginBottom={"0px"}>
                           Canal:
                        </GC.TextSecondary>
                        <DescriptionText target={"_blank"} href={user.channelUrl}>{user.channelName}</DescriptionText> 
                     </DescriptionBox>
                  </Card>
               ))}
               {fakeUsersData.map((user)=>(
                  <Card key={user.id}>
                     <VideoBox dangerouslySetInnerHTML={{__html: user.videoEmbbed}}>
                     </VideoBox>
                     <DescriptionBox>
                        <GC.TextSecondary marginTop={"0px"} marginBottom={"0px"}>
                           Vídeo:
                        </GC.TextSecondary>
                        <DescriptionText target={"_blank"} href={user.videoUrl}>{user.videoTitle}</DescriptionText> 
                     </DescriptionBox>
                     <DescriptionBox>
                        <GC.TextSecondary marginTop={"0px"} marginBottom={"0px"}>
                           Canal:
                        </GC.TextSecondary>
                        <DescriptionText target={"_blank"} href={user.channelUrl}>{user.channelName}</DescriptionText> 
                     </DescriptionBox>
                  </Card>
               ))}               
               </CardsGrid>
            </ContentList>
         </Container>
         <Footer/>
      </PageContainer>
   )
}

export default Conteudo;