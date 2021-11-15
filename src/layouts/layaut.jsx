import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../components/header';
import SideBar from '../components/sideBar';
import PrivateRoute from '../components/privateRoute';




function Layaut ({children}) {
    return (
        <PrivateRoute>
        <div className = 'maincontainer'>

        <Header/>
       
            <div className="container-fluid">
            
                 <div className="row">
                 
                    <SideBar />
                    
                    <div>{children}</div>
                    
                </div>
               
            </div>              
           
        </div>   
        </PrivateRoute> 

   );
}

export default Layaut