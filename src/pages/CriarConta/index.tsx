import React, {useState, useCallback, useEffect } from 'react';

import {Container, Content, Section, SectionContent, InputBox, InputText, RadioInpuBox, RadioInputGroup,RadioInput,RadioInputLabel, ButtonsContainer, Criar } from './styles';
import * as GC from  '../../components/globalComponents';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {useFakeUsers} from '../../context/fakeusers'
import {IUser as User} from '../../dtos/IUser'
import { useAuth } from '../../context/auth';

const CriarConta: React.FC = () => {

   const { fakeUsers } = useFakeUsers();
   const { signIn } = useAuth();

   const [fullName,setFullName]= useState('x');
   const [uf,setUf]= useState('x');
   const [city,setCity]= useState('x');
   const [email,setEmail]= useState('x');
   const [whatsapp,setWhatsapp]= useState('x');
   const [unemployed,setUnemployed]= useState('true');
   const [password,setPassword]= useState('x');
   const [confirmPassword,setConfirmPassword]= useState('x');
   const [channelName,setChannelName]= useState('x');
   const [videoTitle,setVideoTitle]= useState('x');
   const [videoEmbbed,setVideoEmbbed]= useState('x');
   const [functionJob,setFunctionJob]= useState('x');
   const [functionJobXP,setFunctionJobXP]= useState('Prata');
   const [linkedinUrl,setLinkedinUrl]= useState('x');
   const [selfDescription,setSelfDescription]= useState('x');
   const [tags,setTags]= useState('x');
   const [videoUrl,setVideoUrl]= useState('x');
   const [channelUrl,setChannelUrl]= useState('x');
   const [perfil,setPerfil]= useState('x');



   const handleSubmit = useCallback(async()=>{
      const newUser = {
         id:"sttasdaf",
         fullName,
         city,
         uf,
         email,
         whatsapp,
         unemployed,
         channelName,
         videoTitle,
         videoEmbbed,
         functionJob,
         functionJobXP,
         linkedinUrl,
         selfDescription,
         tags,
         password,
      } as User;
      
      console.log(newUser);

   },[
         fullName,
         city,
         uf,
         email,
         whatsapp,
         unemployed,
         channelName,
         videoTitle,
         videoEmbbed,
         functionJob,
         functionJobXP,
         linkedinUrl,
         selfDescription,
         tags,
         password,
      ]
   ) 

   useEffect(()=>{
      signIn({ 
         email: email,
         password: password,
      });
   },[fakeUsers,email,password,signIn]) 


   return (
      <>
      <Header/>
         <Container>
            <GC.WelcomeTitle marginBottom={"10px"} marginTop={"10px"}>Criar Conta</GC.WelcomeTitle>
            <Content>
               <Section>
                  <GC.Title marginBottom={"10px"} marginTop={"10px"}>Informa????es Gerais</GC.Title>
                  <SectionContent>
                     <InputBox>
                        <GC.Text marginBottom={"10px"} marginTop={"10px"}>Nome completo:</GC.Text>
                        <InputText type="text" value={fullName} onChange={(e)=>{setFullName(e.target.value)}}></InputText>
                     </InputBox>
                     <InputBox>
                        <GC.Text marginBottom={"10px"} marginTop={"10px"}>Estado:</GC.Text>
                        <InputText type="text" value={uf} onChange={(e)=>{setUf(e.target.value)}}></InputText>
                     </InputBox>
                     <InputBox>
                        <GC.Text marginBottom={"10px"} marginTop={"10px"}>Cidade:</GC.Text>
                        <InputText type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}></InputText>
                     </InputBox>
                  </SectionContent>
                  <SectionContent>
                     <InputBox>
                        <GC.Text marginBottom={"10px"} marginTop={"10px"}>Email:</GC.Text>
                        <InputText type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}></InputText>
                     </InputBox>
                     <InputBox>
                        <GC.Text marginBottom={"10px"} marginTop={"10px"}>Whatsapp:</GC.Text>
                        <InputText type="text" value={whatsapp} onChange={(e)=>{setWhatsapp(e.target.value)}}></InputText>
                     </InputBox>
                     <InputBox>
                        <GC.Text marginBottom={"10px"} marginTop={"10px"}>Desempregadx?</GC.Text>
                        <RadioInpuBox>
                           <RadioInputGroup>
                              <RadioInput type="radio"name={"unemployed"} value={"true"} onChange={(e)=>{setUnemployed(e.target.value)}} checked={unemployed==="true"?true:false}/>
                              <RadioInputLabel>Sim</RadioInputLabel>
                           </RadioInputGroup>
                           <RadioInputGroup>
                              <RadioInput type="radio"name={"unemployed"} value={"false"} onChange={(e)=>{setUnemployed(e.target.value)}} checked={unemployed==="false"?true:false}/>
                              <RadioInputLabel>N??o</RadioInputLabel>
                           </RadioInputGroup>
                        </RadioInpuBox>
                     </InputBox>
                  </SectionContent>
                  <SectionContent>
                  <InputBox>
                        <GC.Text marginBottom={"10px"} marginTop={"10px"}>Crie uma senha:</GC.Text>
                        <InputText type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></InputText>
                     </InputBox>
                     <InputBox>
                        <GC.Text marginBottom={"10px"} marginTop={"10px"}>Confirme sua senha:</GC.Text>
                        <InputText type="password" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}></InputText>
                     </InputBox>
                  </SectionContent>
               </Section>

               <Section>
                  <GC.Title marginBottom={"10px"} marginTop={"10px"}>Informa????es Profissionais</GC.Title>
                  <SectionContent>
                     <InputBox>
                        <GC.Text marginBottom={"10px"} marginTop={"10px"}>Fun????o Profissional:</GC.Text>
                        <InputText type="text" value={functionJob} onChange={(e)=>{setFunctionJob(e.target.value)}}></InputText> 
                     </InputBox>
                     <InputBox>
                        <GC.Text marginBottom={"10px"} marginTop={"10px"}>N??vel de experi??ncia:</GC.Text>
                        <RadioInpuBox>
                           <RadioInputGroup>
                              <RadioInput type="radio"name={"jobxp"} value={"Prata"} onChange={(e)=>{setFunctionJobXP(e.target.value)}} checked={functionJobXP==="Prata"?true:false}/>
                              <RadioInputLabel>Prata</RadioInputLabel>
                           </RadioInputGroup>
                           <RadioInputGroup>
                              <RadioInput type="radio"name={"jobxp"} value={"Guardi??o"} onChange={(e)=>{setFunctionJobXP(e.target.value)}} checked={functionJobXP==="Guardi??o"?true:false}/>
                              <RadioInputLabel>Guardi??o</RadioInputLabel>
                           </RadioInputGroup>
                           <RadioInputGroup>
                              <RadioInput type="radio"name={"jobxp"} value={"Global"} onChange={(e)=>{setFunctionJobXP(e.target.value)}} checked={functionJobXP==="Global"?true:false}/>
                              <RadioInputLabel>Global</RadioInputLabel>
                           </RadioInputGroup>
                        </RadioInpuBox>
                     </InputBox>
                     <InputBox>
                        <GC.Text marginBottom={"10px"} marginTop={"10px"}>Linkedin:</GC.Text>
                        <InputText type="text" value={linkedinUrl} onChange={(e)=>{setLinkedinUrl(e.target.value)}}></InputText>  
                     </InputBox>
                  </SectionContent>  

                  <SectionContent>
                     <InputBox>
                        <GC.Text marginBottom={"10px"} marginTop={"10px"}>Descri????o:</GC.Text>
                        <InputText type="text"  value={selfDescription} onChange={(e)=>{setSelfDescription(e.target.value)}}></InputText>
                     </InputBox>
                     <InputBox>
                        <GC.Text marginBottom={"10px"} marginTop={"10px"}>Tags:</GC.Text>
                        <InputText type="text"  value={tags} onChange={(e)=>{setTags(e.target.value)}}></InputText>
                     </InputBox>
                  </SectionContent>  
               </Section>
               
               <Section>
                  <GC.Title marginBottom={"10px"} marginTop={"10px"}>Informa????es de Conte??do</GC.Title>
                  <SectionContent>
                     <InputBox>
                        <GC.Text marginBottom={"10px"} marginTop={"10px"}>Nome do canal:</GC.Text>
                        <InputText type="text" value={channelName} onChange={(e)=>{setChannelName(e.target.value)}}></InputText>  
                     </InputBox>
                     <InputBox>
                        <GC.Text marginBottom={"10px"} marginTop={"10px"}>T??tulo do v??deo:</GC.Text>
                        <InputText type="text" value={videoTitle} onChange={(e)=>{setVideoTitle(e.target.value)}}></InputText>
                     </InputBox>
                     <InputBox>
                        <GC.Text marginBottom={"10px"} marginTop={"10px"}>Embbed do v??deo:</GC.Text>
                        <InputText type="text" value={videoEmbbed} onChange={(e)=>{setVideoEmbbed(e.target.value)}}></InputText>
                     </InputBox>
                  </SectionContent>                  
               </Section>
               
               <ButtonsContainer>
                     <Criar onClick={handleSubmit}>Criar Conta!</Criar>
               </ButtonsContainer>
            </Content>
            <Footer/>

         </Container>
      </>
   )
}

export default CriarConta;