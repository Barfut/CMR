import Login from './pages/login';
import Principal from './pages/principal';
import ResumenVentas from './pages/resumenVentas';
import RegistroVentas from './pages/registroVentas';
import Inventario from './pages/inventario';
import AdministrarUsuarios from './pages/administrarUsuarios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.css';

function App() {
  return ( 

    <div className='App'>

      <BrowserRouter>
        <Routes>
          <Route exact path= "/" element ={<Login/>} /> 
          <Route exact path= "/login" element ={<Login/>} /> 
          <Route exact path= "/principal" element ={<Principal/>} /> 
          <Route exact path= "/resumenVentas" element ={<ResumenVentas/>} /> 
          <Route exact path= "/registroVentas" element ={<RegistroVentas/>} /> 
          <Route exact path= "/inventario" element ={<Inventario/>} /> 
          <Route exact path= "/administrarUsuarios" element ={<AdministrarUsuarios/>} />
            
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
