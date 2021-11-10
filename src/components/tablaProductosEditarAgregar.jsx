import ContenidoTablaEditarAgregarVentas from "./contenidoTablaEditarAgregarVentas";

const TablaProductosEditarAgregar = () => {
    return (

        <table className="table">
            
            <thead className="table-light">
                <tr>
                    <th scope="col"> Productos</th>
                    <th scope="col"> Cantidad</th>
                </tr>
            </thead>

            <tbody>
               <ContenidoTablaEditarAgregarVentas />
               <ContenidoTablaEditarAgregarVentas />
               <ContenidoTablaEditarAgregarVentas />
               <ContenidoTablaEditarAgregarVentas />
               <ContenidoTablaEditarAgregarVentas />
               <ContenidoTablaEditarAgregarVentas />
               <ContenidoTablaEditarAgregarVentas />
               <ContenidoTablaEditarAgregarVentas />
               <ContenidoTablaEditarAgregarVentas />
               <ContenidoTablaEditarAgregarVentas />

            </tbody>
        </table>


    );
}


export default TablaProductosEditarAgregar;