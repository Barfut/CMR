import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Layaut from '../layouts/layaut';


function AdministrarUsuarios () {
    return (
        <Layaut>
    <div>

        
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 "> 
                    <h1 className="h2 me-2"> Administra vendedores</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group me-2">
                            <button type="button" className="btn btn-close-dark btn-sm "></button>
                        </div>
                    </div>
                </div> 

                <div>
                    
                </div>

                <br />

                <div className="table-wrapper-scroll-y my-custom-scrollbar-resumen"> 
                    <table className="table table-hover">
                        <thead className="table-light sticky-top">
                        <tr>
                            <th width= "10%" scope="col">#</th>
                            <th width= "35%" scope="col">Nombre</th>
                            <th width= "20%" scope="col">Roll</th>
                            <th width= "20%" scope="col">Estado</th>
                            <th width= "15%" scope="col">Accion</th>
                        </tr>
                        </thead>

                        <tbody>

                        </tbody>
                    </table>
                </div>

            </main>
        
           
    </div>     
    </Layaut>
   );
}

export default AdministrarUsuarios