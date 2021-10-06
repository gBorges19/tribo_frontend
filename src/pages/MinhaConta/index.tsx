import React, { useState, useEffect } from 'react';

import {Container, Content, Section, SectionContent, InputBox, InputText, RadioInpuBox, RadioInputGroup, RadioInput, RadioInputLabel, ButtonsContainer, Salvar } from './styles';
import * as GC from  '../../components/globalComponents';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useAuth } from '../../context/auth';
import { IUser as User } from '../../dtos/IUser';



const MinhaConta: React.FC = () => {

   const [loggedUser,setLoggedUser] = useState<User>({} as User);
   const { user } = useAuth();

   useEffect(()=>{
      setLoggedUser(user);
   })

   return (
      <>
      <Header/>
      <Container>
            <GC.WelcomeTitle marginBottom={"10px"} marginTop={"10px"}>Minha Conta</GC.WelcomeTitle>
            <Content>
               <Section>
                  <GC.Title marginBottom={"10px"} marginTop={"10px"}>Informações Gerais</GC.Title>
                  <SectionContent>
                     <InputBox>
                        <GC.Text marginBottom={"10px"} marginTop={"10px"}>Nome completo:</GC.Text>
                        <InputText type="text" value={loggedUser.fullName}></InputText>
                     </InputBox>
                     <InputBox>
                        <GC.Text marginBottom={"10px"} marginTop={"10px"}>Estado:</GC.Text>
                        <InputText type="text" value={loggedUser.uf}></InputText>
                     </InputBox>
                     <InputBox>
                        <GC.Text marginBottom={"10px"} marginTop={"10px"}>Cidade:</GC.Text>
                        <InputText type="text" value={loggedUser.city}></InputText>
                     </InputBox>
                  </SectionContent>
                  <SectionContent>
                     <InputBox>
                        <GC.Text marginBottom={"10px"} marginTop={"10px"}>Email:</GC.Text>
                        <InputText type="text" value={loggedUser.email}></InputText>
                     </InputBox>
                     <InputBox>
                        <GC.Text marginBottom={"10px"} marginTop={"10px"}>Whatsapp:</GC.Text>
                        <InputText type="text" value={loggedUser.whatsapp}></InputText>
                     </InputBox>
                     <InputBox>
                        <GC.Text marginBottom={"10px"} marginTop={"10px"}>Desempregadx?</GC.Text>
                        <RadioInpuBox>
                           <RadioInputGroup>
                              <RadioInput type="radio"name={"unemployed"} value={"true"} checked={loggedUser.unemployed==="true"?true:false}/>
                              <RadioInputLabel>Sim</RadioInputLabel>
                           </RadioInputGroup>
                           <RadioInputGroup>
                              <RadioInput type="radio"name={"unemployed"} value={"false"} checked={loggedUser.unemployed==="false"?true:false}/>
                              <RadioInputLabel>Não</RadioInputLabel>
                           </RadioInputGroup>
                        </RadioInpuBox>
                     </InputBox>
                  </SectionContent>
                  <SectionContent>
                     <InputBox>
                        <GC.Text marginBottom={"10px"} marginTop={"10px"}>Crie uma senha:</GC.Text>
                        <InputText type="password" value={loggedUser.password} ></InputText>
                     </InputBox>
                     <InputBox>
                        <GC.Text marginBottom={"10px"} marginTop={"10px"}>Confirme sua senha:</GC.Text>
                        <InputText type="password" value={loggedUser.password}></InputText>
                     </InputBox>
                  </SectionContent>
               </Section>

               <Section>
                  <GC.Title marginBottom={"10px"} marginTop={"10px"}>Informações Profissionais</GC.Title>
                  <SectionContent>
                     <InputBox>
                        <GC.Text marginBottom={"10px"} marginTop={"10px"}>Função Profissional:</GC.Text>
                        <InputText type="text" value={loggedUser.functionJob} ></InputText> 
                     </InputBox>
                     <InputBox>
                        <GC.Text marginBottom={"10px"} marginTop={"10px"}>Nível de experiência:</GC.Text>
                        <RadioInpuBox>
                           <RadioInputGroup>
                              <RadioInput type="radio"name={"jobxp"} value={"Prata"} checked={loggedUser.functionJobXP==="Prata"?true:false}/>
                              <RadioInputLabel>Prata</RadioInputLabel>
                           </RadioInputGroup>
                           <RadioInputGroup>
                              <RadioInput type="radio"name={"jobxp"} value={"Guardião"} checked={loggedUser.functionJobXP==="Guardião"?true:false}/>
                              <RadioInputLabel>Guardião</RadioInputLabel>
                           </RadioInputGroup>
                           <RadioInputGroup>
                              <RadioInput type="radio"name={"jobxp"} value={"Global"} checked={loggedUser.functionJobXP==="Global"?true:false}/>
                              <RadioInputLabel>Global</RadioInputLabel>
                           </RadioInputGroup>
                        </RadioInpuBox>
                     </InputBox>
                     <InputBox>
                        <GC.Text marginBottom={"10px"} marginTop={"10px"}>Linkedin:</GC.Text>
                        <InputText type="text" value={loggedUser.linkedin} ></InputText>  
                     </InputBox>
                  </SectionContent>  

                  <SectionContent>
                     <InputBox>
                        <GC.Text marginBottom={"10px"} marginTop={"10px"}>Descrição:</GC.Text>
                        <InputText type="text" value={loggedUser.selfDescription} ></InputText>
                     </InputBox>
                     <InputBox>
                        <GC.Text marginBottom={"10px"} marginTop={"10px"}>Tags:</GC.Text>
                        <InputText type="text" value={loggedUser.tags} ></InputText>
                     </InputBox>
                  </SectionContent>  
               </Section>
               
               <Section>
                  <GC.Title marginBottom={"10px"} marginTop={"10px"}>Informações de Conteúdo</GC.Title>
                  <SectionContent>
                     <InputBox>
                        <GC.Text marginBottom={"10px"} marginTop={"10px"}>Nome do canal:</GC.Text>
                        <InputText type="text" value={loggedUser.channelName} ></InputText>  
                     </InputBox>
                     <InputBox>
                        <GC.Text marginBottom={"10px"} marginTop={"10px"}>Título do vídeo:</GC.Text>
                        <InputText type="text" value={loggedUser.videoTitle} ></InputText>
                     </InputBox>
                     <InputBox>
                        <GC.Text marginBottom={"10px"} marginTop={"10px"}>Embbed do vídeo:</GC.Text>
                        <InputText type="text" value={loggedUser.videoEmbbed} ></InputText>
                     </InputBox>
                  </SectionContent>                  
               </Section>
               <ButtonsContainer>
                  <Salvar onClick={()=>{}}>Salvar Dados!</Salvar>
               </ButtonsContainer>
            </Content>
            <Footer/>

         </Container>
      </>
   )
}


export default MinhaConta;