import { Link } from 'react-router-dom';
import '../styles/App.css';
import { useAuth0 } from '@auth0/auth0-react';

const SideBar = () => {

  const { logout } = useAuth0();

  const cerrarSesion = () => {
    logout({ returnTo: 'https://nameless-falls-53282.herokuapp.com/principal' });
    localStorage.setItem('token', null);
  };

  
    return (

   
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-success text-white sidebar collapse">
                
              <div className="position-sticky pt-3">

                    <TitulosSideBar titulo = 'Vendedor'/>

                    <ul className="nav flex-column">
                      
                      <li className="nav-item px-3">
                        <Link to='/ventas' className="nav-link text-reset dropdown-item" aria-current="page"> Ventas </Link>
                      </li>
                      
                      <li className="nav-item px-3">
                        <span className="nav-link disabled dropdown-item" aria-current="page" > Estado de venta </span>
                      </li>

                    </ul>
                                        
                    
                    <hr className="dropdown-divider" />
                    
                    

                    <TitulosSideBar titulo = 'Administrador'/>

                    
                    <ul className="nav flex-column">
                      <li className="nav-item px-3">
                       <Link to='/inventario' className="nav-link text-reset dropdown-item" aria-current="page"> Inventario </Link>
                      </li>

                      <li className="nav-item px-3">
                        <span className="nav-link disabled dropdown-item" aria-current="page" > Clientes </span>
                      </li>

                      <li className="nav-item px-3">
                        <Link to='/Usuarios' className="nav-link text-reset dropdown-item" aria-current="page"> Usuarios </Link>
                      </li>                  
                    </ul>
                    
                </div>

                <div className=" text-center position-absolute bottom-0 start-50 translate-middle-x"> 
                    <button className="btn btn-success m-1 rounded-pill" onClick={() => cerrarSesion()}>Cerrar sesión</button>
                  </div>  
            </nav>   
    );
}

const TitulosSideBar = ({titulo}) => {
  return (

    <h4 className="d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-white text-white-50">
      <span>{titulo}</span>
    </h4>

  );

}

export default SideBar