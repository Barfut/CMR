import Principal from './pages/principal';
import Ventas from './pages/ventas';
import Inventario from './pages/inventario';
import Usuarios from './pages/usuarios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.css';
import { Auth0Provider } from '@auth0/auth0-react';
import LayoutAunt from './layouts/layoutAunt'
import Login from './pages/login'

function App() {
  return ( 

    <Auth0Provider
      domain="barfut-autenticacion.us.auth0.com"
      clientId="kE45TwgsE9tiKfDOvaNrXkZWsL2Qhpta"
      redirectUri={window.location.origin}
    >
      <div className='App'>
    
        <BrowserRouter>
            
              <Routes>
                <Route  exat path ="/" element ={<Principal/>} />  
                <Route  path= "/layoutAunt" element ={<LayoutAunt/>} /> 
                <Route  path= "/ventas" element ={<Ventas/>} /> 
                <Route  path= "/inventario" element ={<Inventario/>} /> 
                <Route  path= "/usuarios" element ={<Usuarios/>} />        
              </Routes>
            
        </BrowserRouter>
    
      </div>
    </Auth0Provider>
  );
}

export default App;
