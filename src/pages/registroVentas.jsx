import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Layaut from '../layouts/layaut';
import DatosVendedor from '../components/datosVendedor';



function RegistroVentas () {
    return (

    <div>

        <Layaut>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 "> 
              <h1 className="h2 me-2">Registro de venta</h1>
              
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
                    <button type="button" class="btn btn-close-white btn-sm"> </button> 
                </div>
              </div>
            </div>

            <div>
              <DatosVendedor />
            </div>

            </main>
        </Layaut>
           
    </div>     

   );
}

export default RegistroVentas