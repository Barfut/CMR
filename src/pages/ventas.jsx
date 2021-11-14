import { nanoid } from 'nanoid';
import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layaut from '../layouts/layaut';
import { Dialog, Tooltip } from '@material-ui/core';

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

  
  useEffect(() => {
    //obtener lista de vehículos desde el backend
    setVentas(ventasBackend);
  }, []);

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
        <TablaVentas 
          setMostrarTabla={setMostrarTabla}
          listaVentas={ventas}
          setVentas={setVentas}
        />
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

const TablaVentas = ({ setMostrarTabla, listaVentas, setVentas }) => {
  const form = useRef(null);

  const submitEdit = (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);
    console.log(fd)

    const nuevaEdicion = {};
    fd.forEach((value, key) => {
      nuevaEdicion[key] = value;
    });
    
    setMostrarTabla(true);
    setVentas([...listaVentas, nuevaEdicion]);
    toast.success('Venta editada',{hideProgressBar: true});

  }
  return (   
    <>
    <h1 className=' fw-bold d-md-flex justify-content-start pt-3 pb-2 mb-3' >Registro de ventas</h1>

    <div className='table-wrapper-scroll-y my-custom-scrollbar-resumen'>
        <form ref={form} onSubmit={submitEdit}>
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
              {listaVentas.map((ventas) => {
                  return (
                <FilaVenta key = {nanoid()} ventas={ventas}/>
                  );
                })}
            </tbody>
          </table>
        </form>
    </div>
    </>
  );
};


const FilaVenta = ({ventas}) => {
  const [edit, setEdit] = useState(false)
 
  return (

    <tr >
      {edit ? (
        <>
          <td>
            <input className='form-control m-0 p-0' type ='date' defaultValue={ventas.fecha}/>
          </td>
          <td>
            <input className='form-control m-0 p-0' type ='number'defaultValue={ventas.cedula}/>
          </td>
          <td>
            <input className='form-control m-0 p-0' type ='text' defaultValue={ventas.nombre}/>
          </td>
          <td>
            <select className='form-select m-0 p-0' defaultValue={ventas.producto} >
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
            <input min={1} max={250} className='form-control text-center m-0 p-0' type ='number'defaultValue={ventas.cantidad}/>
          </td>
          <td>
            <input min={500} max={5000} className='form-control text-center m-0 p-0' type ='number'defaultValue={ventas.valorUnitario}/>
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
              <button type='submit'>
                <i 
                onClick={()=> setEdit(!edit)}
                className='fas fa-check btn-success shadow-none btn-sm '
                />
              </button>
            ):(
              <i onClick={()=> setEdit(!edit)} 
              className='fas fa-edit btn-outline-warning btn-sm'
              />
            )}
            <Tooltip title='Editar Vehículo' arrow>
            <i className='fas fa-trash-alt btn-outline-danger btn-sm'></i>
            </Tooltip>
          </div>
        </td>
    </tr>
  );
}

const FormularioIngresarVenta = ({ setMostrarTabla, listaVentas, setVentas }) => {
  const form = useRef(null);

  const submitForm = (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevaVenta = {};
    fd.forEach((value, key) => {
      nuevaVenta[key] = value;
    });

    setMostrarTabla(true);
    setVentas([...listaVentas, nuevaVenta]);
    toast.success('Venta agregado',{hideProgressBar: true});
    
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