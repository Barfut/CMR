const ContenidoRegistroUsuarios = () => {
    return (
    
        <tr>
            <td scope="row">1</td>
            <td>Diego Sanabria</td>
            <td>
                <select class="form-select form-select-sm " aria-label=".form-select-sm ">
                    <option selected></option>                                    
                    <option value="1"> Administrador</option>
                    <option value="2"> Usuario</option>                            
                </select>
            </td>
            <td>
                <select class="form-select form-select-sm" aria-label=".form-select-sm ">
                    <option selected></option>                                    
                    <option value="1"> Pendiente</option>
                    <option value="2"> Autorizado</option>                            
                    <option value="3"> No autorizado</option>                            
                </select>
            </td>
            <td> 
                <button type="button" class="btn btn-outline-success btn-sm" >Guardar</button>
            </td>
            </tr>

    );
  
}

export default ContenidoRegistroUsuarios