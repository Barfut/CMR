import React, { useEffect, useState, useRef } from 'react';

const BotonBuscar = ({listadoTabla}) => {

/*  const [busqueda, setBusqueda] = useState(''); 

    useEffect(() => {
      console.log('busqueda', listadoTabla);
      console.log('lista original', listadoTabla);
      console.log (
        'Lista filtrada',
        listadoTabla.filter ((elemento) => {
          console.log('elemento', elemento);
          return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
        })
      );
    }, [busqueda]);

    useEffect(() => {
      console.log('este es el listado de vehiculos en el componente de tabla', listadoTabla);
    }, [listadoTabla]); */

    return (
  
        <div className="me-2">
        <span className="d-flex align-items-center ">Buscar : 
          <input 
            //value={busqueda}
            //onChange = {(e) => setBusqueda(e.target.value)}
            placeholder="Buscar..." 
            className="form-control w-auto ms-1" 
         />
        </span>
      </div>
  
    );
  };

  export default BotonBuscar