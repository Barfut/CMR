import React, { useEffect, useState, useRef } from 'react';

const ContenidoTablaEditarAgregarVentas= () => {
    
    const [nombreProducto, setNombreProducto] = useState('Este es el valor inicial');

  useEffect(() => {
    console.log(
      'Hola, soy un use effect que se ejecuta solo una vez cuando la pagina se renderiza, porque tiene el array de dependencias vacío'
    );
        // paso 2
        // paso3
        // paso4
    }, []);


    useEffect(() => {
        console.log('esto es una funcion que se ejecuta cada que cambia el valor de nombrevehiculo');
        console.log('el valor de la variable es ', nombreProducto);
      }, [nombreProducto]);


   
    return (
      
      <tr>
          <td> 

              <select 
                onChange = { (e) => {
                    setNombreProducto(e.target.value)
                    }
                }
                value = {nombreProducto}
                className="form-select form-select-sm" aria-label=".form-select-sm "
                >
                <option selected></option>
                    <optgroup label = "Alimento Barf"> 
                    <option value="Pollo - 250 gr"> Pollo - 250 gr</option>
                    <option value="pollo - 500 gr"> Pollo - 500 gr</option>
                    <option value="Mixta - 250 gr"> Mixta - 250 gr</option>
                    <option value="Mixta - 250 gr"> Mixta - 500 gr</option>
                    <option value="Hueso carnoso - 250 gr"> Hueso carnoso - 250 gr</option>
                    <option value="Hueso carnoso - 500 gr"> Hueso carnoso - 500 gr</option>
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
              <input 
              
                onChange={(e) => {
                    console.log(e.target.value);
                    }}
                type="number" 
                min="1" 
                placeholder=""  
                className="form-control pb-1 mb-2" width= "70px;" 
                />
          </td>

      </tr>       

  );

}

export default ContenidoTablaEditarAgregarVentas