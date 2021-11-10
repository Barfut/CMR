import { Children } from "react";

const SideBar = () => {
    return (

   
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-success text-white sidebar collapse">
                
              <div className="position-sticky pt-3">

                    <TitulosSideBar titulo = 'Vendedor'/>

                    <ul className="nav flex-column">
                      <li className="nav-item px-3">
                        <a className="nav-link text-reset dropdown-item" aria-current="page" href="./resumenVentas.html"> Resumen de ventas </a>
                      </li>
                      <li className="nav-item px-3">
                        <a className="nav-link text-reset dropdown-item" aria-current="page" href="./registroVentas.html"> Registro de venta </a>
                      </li>
                      <li className="nav-item px-3">
                        <a className="nav-link disabled dropdown-item" aria-current="page" href="#"> Estado de venta </a>
                      </li>
                      <li className="nav-item px-3">
                        <a className="nav-link disabled dropdown-item" aria-current="page" href="#"> Clientes</a>
                      </li>
                    </ul>
                                        
                    
                    <hr className="dropdown-divider" />
                    
                    <TitulosSideBar titulo = 'Administrador'/>

                    <ul className="nav flex-column">
                      <li className="nav-item px-3">
                        <a className="nav-link text-reset dropdown-item" aria-current="page" href="./inventario.html"> Inventario </a>
                      </li>
                      <li className="nav-item px-3">
                        <a className="nav-link disabled dropdown-item" aria-current="page" href="#"> Ingresar productos </a>
                      </li>                    
                      <li className="nav-item px-3">
                        <a className="nav-link text-reset dropdown-item" aria-current="page" href="./administrarUsuarios.html"> Administrar Vendedores </a>
                      </li>                 depurar 
                    </ul>
                    
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