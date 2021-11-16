import Principal from './pages/principal';
import Ventas from './pages/ventas';
import Inventario from './pages/inventario';
import Usuarios from './pages/usuarios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.css';
import { Auth0Provider} from '@auth0/auth0-react';
import { UserContext } from './context/userContext';

import React, { useState } from 'react';

function App() {

  const [userData, setUserData] = useState({});

  return ( 
    
    <Auth0Provider
      domain="barfut-autenticacion.us.auth0.com"
      clientId="kE45TwgsE9tiKfDOvaNrXkZWsL2Qhpta"
      redirectUri='https://nameless-falls-53282.herokuapp.com/principal'
      audience="api-autenticacion-barfut"
      scope="read:current_user update:current_user_metadata"
    >
      <div className='App'>
      <UserContext.Provider value={{ userData, setUserData }}>
        <BrowserRouter>
            
              <Routes>
                <Route  exat path ="/" element ={<Principal/>} />  
                <Route  path= "/principal" element ={<Principal/>} /> 
                <Route  path= "/ventas" element ={<Ventas/>} /> 
                <Route  path= "/inventario" element ={<Inventario/>} /> 
                <Route  path= "/usuarios" element ={<Usuarios/>} />        
              </Routes>
            
        </BrowserRouter>
        </UserContext.Provider>
      </div>
    </Auth0Provider>
    
  );
}

export default App;
