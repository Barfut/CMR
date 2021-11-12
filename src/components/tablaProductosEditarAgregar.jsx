import ContenidoTablaEditarAgregarVentas from "./contenidoTablaEditarAgregarVentas";

const TablaProductosEditarAgregar = () => {
    return (

        <table className="table table-hover">
            
            <thead className="table-light">
                <tr>
                    <th width="80%" scope="col"> Productos </th>
                    <th width="20%" scope="col"> Cantidad</th>
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