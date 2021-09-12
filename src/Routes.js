import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import GlobalStyle from './assets/styles/global'
import Mensagem from './pages/Mensagem';
import Canal from './pages/Canal';
import Curral from './pages/Curral';
import Cuidados from './pages/Cuidados';

function Routes(){

    return(

        <Switch>
            <Route exact path="/">
                <Home />
                <GlobalStyle />
            </Route>
            <Route exact path="/Mensagem">
                <Mensagem />
                <GlobalStyle />
            </Route>
            <Route exact path="/Canal">
                <Canal />
                <GlobalStyle />
            </Route>
            <Route exact path="/Curral">
                <Curral />
                <GlobalStyle />
            </Route>
            <Route exact path="/Cuidados">
                <Cuidados />
                <GlobalStyle />
            </Route>
        </Switch>

    );

}

export default Routes;