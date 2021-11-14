import { nanoid } from 'nanoid';
import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layaut from '../layouts/layaut';
import { Dialog, Tooltip } from '@mui/material';
import axios from 'axios';

const ventasBackend = [
  {
    fecha: '2021-11-07',
    cedula: 10192156785,
    nombre: 'Juan Gomez',
    producto: 'Alimento Barf / Mixta - 500 gr',
    cantidad: 35,
    valorUnitario: 2600,
  },
  {
    fecha: '2021-11-07',
    cedula: 10192156785,
    nombre: 'Juan Gomez',
    producto: 'Alimento Barf / Mixta - 500 gr',
    cantidad: 35,
    valorUnitario: 2600,
  },
  {
    fecha: '2021-11-07',
    cedula: 10192156785,
    nombre: 'Juan Gomez',
    producto: 'Alimento Barf / Mixta - 500 gr',
    cantidad: 35,
    valorUnitario: 2600,
  },
  {
    fecha: '2021-11-07',
    cedula: 10192156785,
    nombre: 'Juan Gomez',
    producto: 'Alimento Barf / Mixta - 500 gr',
    cantidad: 35,
    valorUnitario: 2600,
  },
];


const Ventas = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [ventas, setVentas] = useState([]);
  const [textoBoton, setTextoBoton] = useState('Crear Nuevo Vehículo');
  const [colorBoton, setColorBoton] = useState('indigo');
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
  
  

  const obtenerVentas = async () => {
    const options = { method: 'GET', url: 'https://vast-waters-45728.herokuapp.com/vehicle/' };
    await axios
      .request(options)
      .then(function (response) {
        setVentas(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    setEjecutarConsulta(false);
  };

  useEffect(() => {
    console.log('consulta', ejecutarConsulta);
    if (ejecutarConsulta) {
      obtenerVentas();
    }
  }, [ejecutarConsulta]);

  useEffect(() => {
    //obtener lista de vehículos desde el backend
    if (mostrarTabla) {
      setEjecutarConsulta(true);
    }
  }, [mostrarTabla]);



  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton('Nueva venta');
      setColorBoton('info');
    } else {
      setTextoBoton('Resumen de ventas');
      setColorBoton('success');
    }
  }, [mostrarTabla]);


  return (
    <Layaut>
    <div className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
      <div className='d-md-flex justify-content-md-end pt-3 pb-2 mb-3 '>
        <div className='btn-group me-2'>
            <button 
                onClick={() => {
                setMostrarTabla(!mostrarTabla);
                 }}
                className={`btn btn-${colorBoton} btn-sm `}
            >
               {textoBoton}
            </button>
        </div>

      </div>
      {mostrarTabla ? (
        <TablaVentas listaVentas={ventas} setEjecutarConsulta={setEjecutarConsulta}/>
      ) : (
        <FormularioIngresarVenta
          setMostrarTabla={setMostrarTabla}
          listaVentas={ventas}
          setVentas={setVentas}
        />
      )}
      <ToastContainer position='bottom-center' autoClose={2000} />
    </div>
    </Layaut>
  );
};

const TablaVentas = ({listaVentas, setEjecutarConsulta}) => {

  const [busqueda, setBusqueda] = useState('');
  const [ventasFiltradas, setVentasFiltradas] = useState(listaVentas);

  useEffect(() => {
    setVentasFiltradas(
      listaVentas.filter((elemento) => {
        return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, listaVentas]);

  return (   
    <>
    <div className='d-flex justify-content-start align-items-center'>
      <h1 className=' fw-bold d-md-flex justify-content-start pe-5 pt-3 pb-2 mb-3' >Registro de ventas</h1>
      <input
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder='Buscar'
        className='text-muted form-control w-25 h-50'
      />
    </div>

    <div className='table-wrapper-scroll-y my-custom-scrollbar-resumen'>
        <table className="table table-hover table-bordered">
            <thead className="table-light sticky-top ">
              <tr>
                  <th width="15%">Fecha</th>
                  <th width="10%">C.C. cliente</th>
                  <th width="15%">Cliente</th>
                  <th width="23%">Producto</th>
                  <th width="10%" className="text-center">Cantidad</th>
                  <th width="10%" className="text-center">Valor unitario</th>
                  <th width="10%" className="text-center">Total</th>
                  <th width="7%" className="text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {ventasFiltradas.map((ventas) => {
                  return (
                <FilaVenta 
                  key = {nanoid()} 
                  ventas={ventas}
                  setEjecutarConsulta = {setEjecutarConsulta}
                  />
                  );
                })}
            </tbody>
          </table>
      </div>
    </>
  );
};


const FilaVenta = ({ventas, setEjecutarConsulta}) => {
  const [edit, setEdit] = useState(false)
 
  const [infoNuevaVenta, setInfoNuevaVenta] = useState({
    fecha: ventas.fecha,
    cedula: ventas.cedula,
    nombre: ventas.nombre,
    producto: ventas.producto,
    cantidad: ventas.cantidad,
    valorUnitario: ventas.valorUnitario,
  });

  const actualizarVentas = async () => {
    console.log(infoNuevaVenta);
    //enviar la info al backend
   
    const options = {
      method: 'PATCH',
      url: 'https://vast-waters-45728.herokuapp.com/vehicle/update/',
      headers: { 'Content-Type': 'application/json' },
      data: { ...infoNuevaVenta, id: ventas._id },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success('venta modificado con éxito');
        setEdit(false);
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        toast.error('Error modificando la venta');
        console.error(error);
      });
  };

  const eliminarVenta = async () => {
    const options = {
      method: 'DELETE',
      url: 'https://vast-waters-45728.herokuapp.com/vehicle/delete/',
      headers: { 'Content-Type': 'application/json' },
      data: { id: ventas._id },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success('venta eliminado con éxito');
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        console.error(error);
        toast.error('Error eliminando la venta');
      });
  };

  return (

    <tr >
      {edit ? (
        <>
          <td>
            <input className='form-control m-0 p-0' 
            type ='date' 
            value={infoNuevaVenta.fecha}
            onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, fecha: e.target.value })}
            />
          </td>
          <td>
            <input className='form-control m-0 p-0' 
            type ='number'
            value={infoNuevaVenta.cedula}
            onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, cedula: e.target.value })}
            />  
          </td>
          <td>
            <input className='form-control m-0 p-0' 
            type ='text' 
            value={infoNuevaVenta.nombre}
            onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, nombre: e.target.value })}
            />
          </td>
          <td>
            <select className='form-select m-0 p-0' 
            value={infoNuevaVenta.producto}
            onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, producto: e.target.value })}
            >
                <optgroup label = "Alimento humedo"> 
                    <option>Alimento Barf / Pollo - 250 gr</option>
                    <option>Alimento Barf / Pollo - 500 gr</option>
                    <option>Alimento Barf / Mixta - 250 gr</option>
                    <option>Alimento Barf / Mixta - 500 gr</option>
                    <option>Alimento Barf / Hueso carnoso - 250 gr</option>
                    <option>Alimento Barf / Hueso carnoso - 500 gr</option>
                </optgroup> 
                <optgroup label = "Snacks"> 
                    <option>Snacks / Galletas de higado X 5 und</option>
                    <option>Snacks / Cabano de res x 10 und</option>
                    <option>Snacks / Traquea de res</option>
                    <option>Snacks / Hueso de res</option>
                </optgroup>
            </select>     
          </td>
          <td>
            <input min={1} max={250} className='form-control text-center m-0 p-0' 
            value={infoNuevaVenta.cantidad}
            onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, cantidad: e.target.value })}
            />
          </td>
          <td>
            <input min={500} max={5000} className='form-control text-center m-0 p-0'
            value={infoNuevaVenta.valorUnitario}
            onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, valorUnitario: e.target.value })}
            />
          </td>
        </>

      ): (
        <>
        <td>{ventas.fecha}</td>
        <td>{ventas.cedula}</td>
        <td>{ventas.nombre}</td>
        <td>{ventas.producto}</td>
        <td className="text-center">{ventas.cantidad}</td>
        <td className="text-center">{`  $ ${ventas.valorUnitario}`}</td>        
        </>
      )}

        <td className="text-center">{`  $ ${parseInt(ventas.cantidad) * parseInt(ventas.valorUnitario)} `} </td>
        <td>
          <div className= 'd-flex justify-content-evenly'>
            {edit ? (
               <Tooltip title='Confirmar' arrow>
                <i 
                onClick={()=> actualizarVentas()}
                className='fas fa-check btn-success shadow-none btn-sm '
                />
              </Tooltip>
            ):(
              <Tooltip title='Editar' arrow>
                <i onClick={()=> setEdit(!edit)} 
                className='fas fa-edit btn-outline-warning btn-sm'
                />
              </Tooltip>
            )}
            <Tooltip title='Eliminar' arrow>
              <i 
                onClick={() => eliminarVenta()}
                className='fas fa-trash-alt btn-outline-danger btn-sm'
              />
            </Tooltip>
          </div>
        </td>
    </tr>
  );
}

const FormularioIngresarVenta = ({ setMostrarTabla, listaVentas, setVentas }) => {
  const form = useRef(null);

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevaVenta = {};
    fd.forEach((value, key) => {
      nuevaVenta[key] = value;
    });

    const options = {
      method: 'POST',
      url: 'https://vast-waters-45728.herokuapp.com/vehicle/create',
      headers: { 'Content-Type': 'application/json' },
      data: { 
        fecha: nuevaVenta.fecha,
        cedula: nuevaVenta.cedula,
        nombre: nuevaVenta.nombre,
        producto: nuevaVenta.producto,
        cantidad: nuevaVenta.cantidad,
        valorUnitario: nuevaVenta.valorUnitario,
       },
    };
  
  await axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      toast.success('Venta agregado con éxito');
    })
    .catch(function (error) {
      console.error(error);
      toast.error('Error creando una venta');
    });

  setMostrarTabla(true);
  };

  return (

    <>
      <h2 className='fw-bold d-md-flex justify-content-start pt-3 pb-2 mb-3'>Ingresar nueva venta</h2>

        <div>
            <form ref={form} onSubmit={submitForm} className='row justify-content-md-center'>

                <h4 className='d-md-flex justify-content-start pt-3 pb-2 mb-3'>Informacion del cliente</h4>
                
                <div className='d-inline-flex align-self-center align-middle w-100'>                  
                    
                    <label className=' p-2 text-start w-100' htmlFor='fecha'>
                    Fecha
                    <input
                        name='fecha'
                        className='text-muted form-control w-75'
                        type='date'
                        required
                    />
                    </label>

                    <label className='p-2 text-start w-100' htmlFor='cedula'>
                    # C.C cliente
                    <input
                        name='cedula'
                        className='text-muted form-control w-75'
                        type='number'
                        placeholder='...'
                        required
                    />
                    </label>

                    <label className='p-2 text-start w-100' htmlFor='nombre'>
                    Nombre del cliente
                    <input
                        name='nombre'
                        className=' text-muted form-control w-75'
                        type='text'
                        placeholder='...'
                        required
                    />
                    </label>
                </div>
                <hr/>
                
                <div className=' container'>
                    
                    <h4 className='d-md-flex justify-content-start pt-3 pb-2 mb-3'>Informacion del producto</h4>
                    
                    <label className=' align-middle d-flex w-100 py-3' htmlFor='producto'>
                    Producto
                    <select
                        className='text-muted form-select ms-5 w-75'
                        name='producto'
                        required
                        defaultValue={0}
                     >
                        <option disabled value={0}> Seleccione una opción</option>
                        <optgroup label = "Alimento humedo"> 
                            <option>Alimento Barf / Pollo - 250 gr</option>
                            <option>Alimento Barf / Pollo - 500 gr</option>
                            <option>Alimento Barf / Mixta - 250 gr</option>
                            <option>Alimento Barf / Mixta - 500 gr</option>
                            <option>Alimento Barf / Hueso carnoso - 250 gr</option>
                            <option>Alimento Barf / Hueso carnoso - 500 gr</option>
                        </optgroup> 
                        <optgroup label = "Snacks"> 
                            <option>Snacks / Galletas de higado X 5 und</option>
                            <option>Snacks / Cabano de res x 10 und</option>
                            <option>Snacks / Traquea de res</option>
                            <option>Snacks / Hueso de res</option>
                        </optgroup>
                    </select>                  
                    </label>
                

                    <label className='align-middle d-flex w-100 py-3' htmlFor='cantidad'>
                    Cantidad
                    <input
                        name='cantidad'
                        className='text-muted form-control ms-5 w-75'
                        type='number'
                        min={1}
                        max={250}
                        placeholder='...'
                        required
                    />
                    </label>

                    <label className='align-middle d-flex w-100 py-3' htmlFor='valorUnitario'>
                    Und valor
                    <input
                        name='valorUnitario'
                        className='text-muted form-control ms-5 w-75'
                        type='number'
                        min={500}
                        max={5000}
                        placeholder='...'
                        required
                    />
                    </label>
                    
                    <div className='container py-5'> 
                        <button
                        type='submit'
                        className='btn btn-success btn-sm'
                        >
                        Guardar venta
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </>
  );
};

export default Ventas;