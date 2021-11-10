import Login from './pages/login';
import Principal from './pages/principal';
import ResumenVentas from './pages/resumenVentas';
import RegistroVentas from './pages/registroVentas';
 
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';



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
            
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
