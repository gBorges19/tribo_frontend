import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Mensagem from '../pages/Mensagem';
import Conteudo from '../pages/Conteudo';
import Curral from '../pages/Curral';
import SeCuide from '../pages/SeCuide';
import Login from '../pages/Login';
import CriarConta from '../pages/CriarConta';
import MinhaConta from '../pages/MinhaConta';
import SobreNos from '../pages/SobreNos';
import Atribuicoes from '../pages/Atribuicoes';
import Contato from '../pages/Contato';




const Routes: React.FC = () =>(
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/mensagem"  component={Mensagem}/>
        <Route path="/conteudo"  component={Conteudo}/>
        <Route path="/curral"  component={Curral}/>
        <Route path="/secuide"  component={SeCuide}/>
        <Route path="/login"  component={Login}/>
        <Route path="/criarconta"  component={CriarConta}/>
        <Route path="/minhaconta"  component={MinhaConta}/>
        <Route path="/sobre" component={SobreNos}/>
        <Route path="/atribuicoes" component={Atribuicoes}/>
        <Route path="/contato" component={Contato}/>
    </Switch>
)

export default Routes;