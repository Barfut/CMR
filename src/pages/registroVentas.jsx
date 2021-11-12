import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Layaut from '../layouts/layaut';
import DatosVendedor from '../components/datosVendedor';
import ModalAgregarProducto from '../components/modalAgregarProducto';
import ContenidoRegistroVenta from '../components/contenidoRegistroVenta';



function RegistroVentas () {
    return (

    <div>
        <Layaut>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 "> 
                <h1 className="h2 me-2">Registro de venta</h1>
                
                <div className="btn-toolbar mb-2 mb-md-0">
                  <div className="btn-group me-2">
                      <button type="button" className="btn btn-close-white btn-sm"> </button> 
                  </div>
                </div>
              </div>

              <div>
                <DatosVendedor />
              </div>

              <hr/> 
              <br />
              <br />
          
              <ModalAgregarProducto />

              <br />

              <div className="table-wrapper-scroll-y my-custom-scrollbar"> 
                <table className="table table-hover">
                  <thead className="table-light sticky-top">
                    <tr>
                      <th width="5%" scope="col">#</th>
                      <th width="40%" scope="col">Producto</th>
                      <th width="20%" scope="col">Precio unitario</th>
                      <th width="15%" scope="col">Cantidad</th>
                      <th width="20%" scope="col">Total</th>
                    </tr>
                  </thead>

                  <tbody>
                    
                    <ContenidoRegistroVenta />
                    <ContenidoRegistroVenta />
                    <ContenidoRegistroVenta />
                    <ContenidoRegistroVenta />
                    <ContenidoRegistroVenta />
                    <ContenidoRegistroVenta />
                    <ContenidoRegistroVenta />
                    <ContenidoRegistroVenta />
                    <ContenidoRegistroVenta />
                    <ContenidoRegistroVenta />

                  </tbody>

                </table>
              </div> 
            
              <br />
            
              <div className="mb-3 row">
                <label for="Total" className="col-sm-1 col-form-label">Total: </label>
                <div className="col-sm-1">
                  <input type="text" readonly className="form-control-plaintext" id="Total" value="$ "/>
                </div>
              </div>

              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="reset" class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#registrarModal"> Registrar</button> 
            </div>

            <div class="modal fade" id="registrarModal" tabindex="-1" aria-labelledby="registrarModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">

                    <div class="modal-header">
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body text-center">
                      ¡La venta se ha realizado con exito !                     
                    </div>

                  </div>
                </div>
              </div>

          </main>

        </Layaut>
           
    </div>     

   );
}

export default RegistroVentas