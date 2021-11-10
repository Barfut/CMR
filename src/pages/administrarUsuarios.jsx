import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Layaut from '../layouts/layaut';
import BotonBuscar from '../components/botonBuscar';
import ContenidoRegistroUsuarios from '../components/contenidoRegistroUsuarios';


function AdministrarUsuarios () {
    return (

    <div>

        <Layaut>
            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 "> 
                    <h1 class="h2 me-2"> Administra vendedores</h1>
                    <div class="btn-toolbar mb-2 mb-md-0">
                        <div class="btn-group me-2">
                            <button type="button" class="btn btn-close-dark btn-sm "></button>
                        </div>
                    </div>
                </div> 

                <div>
                    <BotonBuscar />
                </div>

                <br />

                <div class="table-wrapper-scroll-y my-custom-scrollbar-resumen"> 
                    <table class="table">
                        <thead class="table-light sticky-top">
                        <tr>
                            <th width= "10%" scope="col">#</th>
                            <th width= "35%" scope="col">Nombre</th>
                            <th width= "20%" scope="col">Roll</th>
                            <th width= "20%" scope="col">Estado</th>
                            <th width= "15%" scope="col">Accion</th>
                        </tr>
                        </thead>

                        <tbody role="rowgroup">

                            <ContenidoRegistroUsuarios />
                            <ContenidoRegistroUsuarios />
                            <ContenidoRegistroUsuarios />
                            <ContenidoRegistroUsuarios />
                            <ContenidoRegistroUsuarios />

                        </tbody>
                    </table>
                </div>

            </main>
        </Layaut>
           
    </div>     

   );
}

export default AdministrarUsuarios