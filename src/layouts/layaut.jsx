import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../components/header';
import SideBar from '../components/sideBar';
import PrivateRoute from '../components/privateRoute';




function Layaut ({children}) {
    return (
  
        <div className = 'maincontainer'>

        <Header/>
       
            <div className="container-fluid">
            <PrivateRoute>
                 <div className="row">
                 
                    <SideBar />
                    
                    <div>{children}</div>
                    
                </div>
            </PrivateRoute>    
            </div>              
           
        </div>   
    

   );
}

export default Layaut