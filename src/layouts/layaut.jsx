import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../components/header';
import SideBar from '../components/sideBar';




function Layaut ({children}) {
    return (

    <div className = 'maincontainer'>

        <Header/>
            <div className="container-fluid">
                 <div className="row">
        
                    <SideBar />

                    <div>{children}</div>
                </div>

            </div>
        
           
    </div>     

   );
}

export default Layaut