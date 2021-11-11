const ContenidoTablaEditarAgregarVentas= () => {
  return (
      
      <tr>
          <td> 

              <select className="form-select form-select-sm" aria-label=".form-select-sm ">
              <option selected></option>
              <optgroup label = "Alimento Barf"> 
                  <option value="1"> Pollo - 250 gr</option>
                  <option value="2"> Pollo - 500 gr</option>
                  <option value="3"> Mixta - 250 gr</option>
                  <option value="4"> Mixta - 500 gr</option>
                  <option value="5"> Hueso carnoso - 250 gr</option>
                  <option value="6"> Hueso carnoso - 500 gr</option>
              </optgroup>          

              <optgroup label = "snaacks"> 
                  <option value="7"> Galletas de higado X 5 und</option>
                  <option value="8"> Cabano de res x 10 und</option>
                  <option value="9"> Traquea de res</option>
                  <option value="10"> Hueso de res</option>
              </optgroup>
              </select>
              
          </td>  

          <td>
              <input type="number" min="1" className="form-control" placeholder="" value="0" width= "70px;" />
          </td>

      </tr>       

  );

}

export default ContenidoTablaEditarAgregarVentas