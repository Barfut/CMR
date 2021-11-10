import 'styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Layaut from 'layouts/layaut';



function Principal () {
    return (

    <div>

        <Layaut>
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 "> 
                <h1 class="h2 me-2">Inventario</h1>
                
                <div class="btn-toolbar mb-2 mb-md-0">
                  <div class="btn-group me-2">
                    <a class="btn btn-success btn-sm disabled" href="#">Registrar nuevo producto</a>
                  </div>
                </div>
              </div>

              <div class="me-2">
                <span class="d-flex align-items-center ">Buscar : 
                  <input placeholder="Buscar..." class="form-control w-auto ms-1" value="" />
                </span>
              </div>


            </main>
        </Layaut>
           
    </div>     

   );
}

export default Principal