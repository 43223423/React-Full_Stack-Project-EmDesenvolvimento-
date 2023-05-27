import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import './App.css';
import Container from './componentes/layout/Container';
import NavBar from './componentes/layout/NavBar';
import Footer from './componentes/layout/Footer';

import Login from './componentes/pages/Login';
import Entrar from './componentes/pages/Entrar';
import Home from './componentes/pages/Home'
import Registrar from './componentes/pages/Registrar';
import NavBarHome from './componentes/NavBarHome/NavBarHome';
import { Component, useEffect, useState } from 'react';
import Perfil from './componentes/pages/Perfil';
import { GiRooster } from 'react-icons/gi';
import Conta from './componentes/componentesConta/Conta';
import Password from './componentes/componentesConta/Password';
import Sucesso from './componentes/componentesConta/Sucesso';
import Codigo from './componentes/componentesConta/Codigo';
import EditarPerfil from './componentes/pages/EditarPefil';
import Extrato from './componentes/componentesExtrato/Extrato';
import Emprestimo from './componentes/pages/Emprestimo';


function App() {

  let components

  switch (window.location.pathname ) {
    case '/':
      components = <NavBar/>
  
      break
    case '/home':
      components = <NavBarHome/>
      break
    case '/registrar':
      components = <NavBar/>
      break
    case '/entrar':
      components = <NavBar/>
      break
    case '/registrar':
      components = <NavBar/>
      break
    case '/perfil':
      components = <NavBarHome/>
      break
    case '/conta':
      components = <NavBarHome/>
      break
    case '/password':
      components = <NavBarHome/>
      break
    case '/sucesso':
      components = <NavBarHome/>
      break
    case '/codigo':
      components = <NavBarHome/>
      break
    case '/editar':
      components = <NavBarHome/>
      break
    case '/extrato':
      components = <NavBarHome/>
      break
    case '/emprestimo':
      components = <NavBarHome/>
      break
  }

  return (
    <Router>
      {components}
        <Switch>
          <Container customClass='min_height'>
            
              <Route exact path='/' >
               
                  <Login/>
              </Route>
              <Route exact path='/entrar'>
                  <Entrar/>
              </Route>
              <Route exact path='/home'>
             
         
                  <Home/>
              </Route>
              <Route exact path='/registrar'>
                <Registrar/>
              </Route>
              <Route exact path='/perfil'>
                <Perfil/>
              </Route>
              <Route path='/conta'>
                <Conta/>
              </Route>
              <Route exact path='/password'>
                <Password/>
              </Route>
              <Route exact path='/sucesso'>
                <Sucesso/>
              </Route>
              <Route exact path='/codigo'>
                <Codigo/>
              </Route>
              <Route exact path='/editar'>
                <EditarPerfil/>
              </Route>
              <Route exact path='/extrato'>
                <Extrato/>
              </Route>
              <Route exact path='/emprestimo'>
                <Emprestimo/>
              </Route>

          </Container>
        </ Switch>
      <Footer/>
    </Router>
  );
}

export default App;
