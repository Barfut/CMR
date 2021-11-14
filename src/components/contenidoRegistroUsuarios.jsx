const ContenidoRegistroUsuarios = () => {
    return (
    
        <tr>
            <td scope="row">1</td>
            <td>Diego Sanabria</td>
            <td>
                <select class="form-select form-select-sm " aria-label=".form-select-sm ">
                    <option selected></option>                                    
                    <option value="Administrador"> Administrador</option>
                    <option value="Usuario"> Usuario</option>                            
                </select>
            </td>
            <td>
                <select class="form-select form-select-sm" aria-label=".form-select-sm ">
                    <option selected></option>                                    
                    <option value="Pendiente" selected> Pendiente</option>
                    <option value="Autorizado"> Autorizado</option>                            
                    <option value="No autorizado"> No autorizado</option>                            
                </select>
            </td>
            <td> 
                <button type="button" class="btn btn-outline-success btn-sm" >Guardar</button>
            </td>
            </tr>

    );
  
}

export default ContenidoRegistroUsuarios