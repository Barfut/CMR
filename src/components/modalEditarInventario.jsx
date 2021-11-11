import BotonCancelar from "./botonCancelar";
import BotonVerdeModal from "./botonVerdeModal";

const ModalEditarInventario = () => {
    return (

    <>
    <td>
            
            <button type="button" className="btn btn-outline-success btn-sm" data-bs-toggle="modal" data-bs-target="#editarInventarioModal">Editar</button>

            <div className="modal fade" id="editarInventarioModal" tabindex="-1" aria-labelledby="editarInventarioModalLabel" aria-hidden="true">
               
                <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editarInventarioModalLabel">Editar inventario - Producto ID "XxXx"</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body ">
                    
                        <span className=" d-flex justify-content-between w-75 ms-3">Categoria 
                            <select className="form-select form-select-sm ms-4" aria-label=".form-select-sm ">
                                <option selected></option>                                    
                                <option value="1"> Alimento Barf</option>
                                <option value="2"> Snacks</option>                            
                            </select>
                        </span>
                        
                        <br />

                        <span className="d-flex align-items-center w-50 ">Descripcion 
                            <input placeholder="..." className="form-control w-auto ms-4" value="" />
                        </span>

                        <br/>

                        <span className="d-flex align-items-center w-75 ms-2 ">Valor unitario 
                            <input placeholder="..." className="form-control w-auto ms-5" value="" />
                        </span>

                        <br />

                        <span className=" d-flex justify-content-between w-75 m-3">Estado 
                            <select className="form-select form-select-sm ms-5" aria-label=".form-select-sm ">
                                <option selected></option>                                    
                                <option value="1"> Disponible</option>
                                <option value="2"> No disponible</option>                            
                            </select>
                        </span>
                    <br />
                    
                    </div>
                    <div className="modal-footer">
                        <BotonCancelar />
                        <BotonVerdeModal texto = "Guardar" />
                    </div>
                </div>
                </div>
            </div>

            </td>
    </>

    );
  
}

export default ModalEditarInventario