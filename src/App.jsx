import Login from 'pages/login';
import Principal from 'pages/principal';
 
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import 'styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return ( 

    <div className='App'>

      <BrowserRouter>
        <Routes>
          <Route exact path= "/" element ={<Login/>} /> 
          <Route exact path= "/login" element ={<Login/>} /> 
          <Route exact path= "/principal" element ={<Principal/>} /> 
            
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
