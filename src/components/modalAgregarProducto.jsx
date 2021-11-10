import BotonCancelar from "./botonCancelar";
import BotonVerdeModal from "./botonVerdeModal";
import TablaProductosEditarAgregar from "./tablaProductosEditarAgregar"

const ModalAgregarProducto = () => {
    return (

    <>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button type="button" className="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#editarModal">Agregar producto</button>
    </div>
    <div className="modal fade" id="editarModal" tabindex="-1" aria-labelledby="editarModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
    
                <div className="modal-header">
                <h5 className="modal-title" id="editarModalLabel">Listado de productos</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                    
                <div className="modal-body">
                    
                    <TablaProductosEditarAgregar />
                </div>

                <div className="modal-footer">
                    <BotonCancelar />
                    <BotonVerdeModal texto = "Agregar" />
                </div>
            </div>
        </div>
    </div>
    </>

    );
  
}

export default ModalAgregarProducto