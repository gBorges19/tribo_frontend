import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './assets/styles/global';
import AppProvider from './context';
import Sidebar from './components/Sidebar';

const App:React.FC = ()=>(
  <BrowserRouter>
    <div style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      flexDirection: "column"
    }}> 
      <AppProvider>
        <Sidebar/>
        {/*<Header/>*/}
        <Routes/>
      </AppProvider>
      <GlobalStyle />
    </div>
  </BrowserRouter>
);


export default App;
