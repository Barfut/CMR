import Login from './pages/login';
import Principal from './pages/principal';
import Ventas from './pages/ventas';
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
            <Route  path ="/" element ={<Login/>} />  
            <Route  path= "/principal" element ={<Principal/>} /> 
            <Route  path= "/ventas" element ={<Ventas/>} /> 
            <Route  path= "/inventario" element ={<Inventario/>} /> 
            <Route  path= "/administrarUsuarios" element ={<AdministrarUsuarios/>} />        
          </Routes>
      
    </BrowserRouter>
 


    </div>
  );
}

export default App;
