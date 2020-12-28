import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//esta funcao Provider dera acesso do "store" a todos os components
//import { Provider } from 'react-redux';
//import { ToastContainer } from 'react-toastify';
import history from './services/history';
import GlobalStyle from './styles/global';
import Routes from './routes';
import Heade from './components/Heade';

export default function App() {
  return (
    <>
      <Router history={history}>
        <GlobalStyle />
        <Heade />
        <Routes />
      </Router>
    </>
  );
}
