import '../styles/App.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.css';
import Layaut from '../layouts/layaut';
import BotonBuscar from '../components/botonBuscar';
import ContenidoResumenVentas from '../components/contenidoResumenVentas';
import { Link } from 'react-router-dom';



function ResumenVentas () {
    return (

    <div>

        <Layaut>
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 "> 
              <h1 className="h2 me-2">Resumen de ventas</h1>
              
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
                  <Link to='/registroVentas' className="btn btn-success btn-sm">Registrar venta</Link>
                </div>
              </div>
            </div>

            <div>
              <BotonBuscar />
            </div>

            <br />

            <div className="table-wrapper-scroll-y my-custom-scrollbar-resumen"> 
              <table className="table table-hover">
                <thead className="table-light sticky-top">
                  <tr>
                    <th width="20%" scope="col">ID</th>
                    <th width="15%" scope="col">Fecha</th>
                    <th width="40%" scope="col">Cliente</th>
                    <th width="18%" scope="col">Total</th>
                    <th width="7%" scope="col">Accion</th>
                  </tr>
                </thead>
                
                <tbody>

                  <ContenidoResumenVentas />
                  <ContenidoResumenVentas />
                  <ContenidoResumenVentas />
                  <ContenidoResumenVentas />
                  <ContenidoResumenVentas />
                  <ContenidoResumenVentas />
                  <ContenidoResumenVentas />
                  <ContenidoResumenVentas />
                  <ContenidoResumenVentas />
                  <ContenidoResumenVentas />
                  <ContenidoResumenVentas />
                  <ContenidoResumenVentas />
                  <ContenidoResumenVentas />
                  <ContenidoResumenVentas />
                  <ContenidoResumenVentas />
                  <ContenidoResumenVentas />
                  

                </tbody>
              </table>
            </div>

            

        </main>

        </Layaut>
        
        
    </div>     

   );
}

export default ResumenVentas