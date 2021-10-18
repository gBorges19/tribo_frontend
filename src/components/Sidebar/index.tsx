import React, {useState} from 'react';

import { Nav, NavIcon, Button,  NavLogo, SidebarNav, SidebarWrap } from './styles';

import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'

import {SidebarData} from '../SidebarData'
import SubMenu from '../SubMenu';
import { IconContext } from 'react-icons/lib';

import Capa from "../../assets/images/header/capa.png"
import { useAuth } from '../../context/auth';

const Sidebar: React.FC = () => {

   const [sidebar, setSidebar] = useState(false);

   const showSidebar = () => setSidebar(!sidebar);

   const {user} = useAuth();

   return (
      <>
         <IconContext.Provider value={{color: '#fff'}}>
         <Nav>
            <NavLogo src={Capa} alt="Capacete da Tribo" width="5%"></NavLogo>
            <Button href="/">Inicio</Button>
            <Button href="/mensagem">Mensagem</Button>
            <Button href="/conteudo">Conteúdos das Mulas</Button>
            <Button href="/curral">Mulas sem Curral</Button>
            <Button href="/secuide">Se cuide Mula</Button>
            {!user && <Button href="/login">Login</Button>}
            {user && <Button href="/minhaconta">Minha Conta</Button>}
            <NavIcon to='#'>
               <FaIcons.FaBars onClick={showSidebar}/>
            </NavIcon>
         </Nav>
         <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
               <NavIcon to='#'>
                  <AiIcons.AiOutlineClose onClick={showSidebar}/>
               </NavIcon>
               {SidebarData.map((item,index)=>{
                  return <SubMenu item={item} key={index} />
               })}
            </SidebarWrap>
         </SidebarNav>
        </IconContext.Provider>
      </>
   )
}

export default Sidebar;