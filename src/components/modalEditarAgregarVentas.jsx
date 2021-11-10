import DatosVendedor from "./datosVendedor"
import TablaProductosEditarAgregar from "./tablaProductosEditarAgregar"

const ModalEditarAgregarVentas = () => {
    return (

    <>
    <button type="button" className="btn btn-outline-success btn-sm" data-bs-toggle="modal" data-bs-target="#editarModal">Editar</button>
    
    <div className="modal fade" id="editarModal" tabindex="-1" aria-labelledby="editarModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
    
                <div className="modal-header">
                <h5 className="modal-title" id="editarModalLabel">Editar venta - ID "XxXx"</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                    
                <div className="modal-body">
                    <DatosVendedor />
                    <br />
                    <TablaProductosEditarAgregar />
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary btn-sm opacity-50" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" className="btn btn-success btn-sm">Guardar</button>
                </div>
            </div>
        </div>
    </div>
    </>

    );
  
}

export default ModalEditarAgregarVentas