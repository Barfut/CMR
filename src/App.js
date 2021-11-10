import Login from 'pages/login';
 
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'

import 'styles/App.css';


function App() {
  return ( 

    <div className='App'>

      <Router>

        <Switch>

          <Route path = '/login'> 
            <Login /> 
          </Route>

          <Route path="/">
            <Home />
          </Route>
        
        </Switch>
      </Router>

    </div>
  );
}

export default App;
