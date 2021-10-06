import React, { useState, useEffect } from 'react';
import {useFakeUsers} from '../../context/fakeusers'
import {IUser as User} from '../../dtos/IUser'

import {
   PageContainer,
   Container,
   Content,
   ContentList,
   CardsGrid,
   Card,
   PerfilBox,
   PerfilImg,
   PerfilTextBox,
   PerfilText,
   DescriptionBox,
   DescriptionText,
   DescriptionLabel,
   TagsAndInBox,
   TagsContent,
   InImg,
} from './styles';

import * as GC from  '../../components/globalComponents';

import Footer from '../../components/Footer';

import donkey_left from '../../assets/images/home/donkey_left.svg';

import linkedinImg from '../../assets/images/curral/in.svg';

const Curral: React.FC = () => {
   const {fakeUsers} = useFakeUsers();

   const [users,setUsers] = useState<User[]>([]);

   useEffect(()=>{
         setUsers([...users,...fakeUsers])
   },[]);


   return (
      <PageContainer>
         <Container>
            <Content>
                  <GC.Title>MULAS SEM CURRAL</GC.Title>
                  <GC.SubTitle marginTop={"0px"} marginBottom={"10px"}>Se você tem um curral no seu negócio ou um negócio no seu curral, contrate uma mula!</GC.SubTitle>
                  <GC.SubTitle marginTop={"0px"} marginBottom={"10px"}>Agora, se você é uma mula sem curral, entre na lista!</GC.SubTitle>
            </Content>
            <ContentList>
               <CardsGrid>
                  {users.map((user)=>(
                     <Card key={user.id}>
                        <PerfilBox>
                           <PerfilImg src={donkey_left} alt={"Imagem da mula"}/>
                           <PerfilTextBox>
                              <PerfilText>{user.fullName}</PerfilText>
                              <PerfilText>{user.functionJob}</PerfilText>
                           </PerfilTextBox>
                        </PerfilBox>
                        <DescriptionBox>
                           <DescriptionText>Descrição:</DescriptionText>
                           <DescriptionLabel>{user.selfDescription}</DescriptionLabel>
                        </DescriptionBox>
                        <TagsAndInBox>
                           <TagsContent>{`${user.city} - ${user.uf}`}</TagsContent>
                           <InImg src={linkedinImg} alt={"Ir para linkedin da mula"}/>
                        </TagsAndInBox>
                     </Card> 
                  ))}
               </CardsGrid>
            </ContentList>
         </Container>
         <Footer/>
      </PageContainer>
   )
}

export default Curral;