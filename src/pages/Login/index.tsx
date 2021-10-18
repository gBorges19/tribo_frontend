import React, {useState, useCallback} from 'react';
import { Link } from 'react-router-dom';

import {Container, Content, LoginContainer, InputText, ButtonsContainer, Entrar } from './styles';
import * as GC from  '../../components/globalComponents';

import Footer from '../../components/Footer';

import { useAuth } from '../../context/auth';

const Login: React.FC = () => {
   
   const { signIn } = useAuth();
   
   const [email,setEmail]= useState('');
   const [password,setPassword]= useState('');

   const handleLogin = useCallback(async(data)=>{
      await signIn({
         email: data.email,
         password: data.password,
       });

   },[signIn]) 

   return (
      <>
         <Container>
            <Content>
               <GC.WelcomeTitle marginBottom={"10px"} marginTop={"10px"}>Login</GC.WelcomeTitle>
               <LoginContainer>
                  <GC.Text marginBottom={"10px"}  marginTop={"10px"}>Email:</GC.Text>
                  <InputText type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}></InputText>
                  <GC.Text marginBottom={"10px"} marginTop={"10px"}>Senha:</GC.Text>
                  <InputText type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></InputText>
                  <ButtonsContainer>
                     <Entrar onClick={()=>{handleLogin({email,password})}}>Entrar</Entrar>
                     <Link to="/criarconta">Criar Conta</Link>
                  </ButtonsContainer>
               </LoginContainer>
            </Content>
         </Container>
      <Footer/>
      </>
   )
}

export default Login;