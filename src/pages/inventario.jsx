import { nanoid } from 'nanoid';
import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layaut from '../layouts/layaut';
import { Dialog, Tooltip } from '@mui/material';
import axios from 'axios';



function Inventario () {
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [inventatio, setInventatio] = useState([]);
    const [textoBoton, setTextoBoton] = useState('Crear Nuevo producto');
    const [colorBoton, setColorBoton] = useState('indigo');
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
    
    
  
    const obtenerInventatio = async () => {
      const options = { method: 'GET', url: 'http://localhost:5000/inventatio/' };
      await axios
        .request(options)
        .then(function (response) {
          setInventatio(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
      setEjecutarConsulta(false);
    };
  
    useEffect(() => {
      console.log('consulta', ejecutarConsulta);
      if (ejecutarConsulta) {
        obtenerInventatio();
      }
    }, [ejecutarConsulta]);
  
    useEffect(() => {
      //obtener lista de vehiculos desde el backend
      if (mostrarTabla) {
        setEjecutarConsulta(true);
      }
    }, [mostrarTabla]);
  
  
  
    useEffect(() => {
      if (mostrarTabla) {
        setTextoBoton('Agregar nuevo producto');
        setColorBoton('info');
      } else {
        setTextoBoton('inventatio');
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
          <TablaProductos listaProductos={inventatio} setEjecutarConsulta={setEjecutarConsulta}/>
        ) : (
          <FormularioIngresarProducto
            setMostrarTabla={setMostrarTabla}
            listaProductos={inventatio}
            setInventatio={setInventatio}
          />
        )}
        <ToastContainer position='bottom-center' autoClose={2000} />
      </div>
      </Layaut>
    );
  };
  
  const TablaProductos = ({listaProductos, setEjecutarConsulta}) => {
  
    const [busqueda, setBusqueda] = useState('');
    const [ventasFiltradas, setVentasFiltradas] = useState(listaProductos);
  
    useEffect(() => {
      setVentasFiltradas(
        listaProductos.filter((elemento) => {
          return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
        })
      );
    }, [busqueda, listaProductos]);
  
    return (   
      <>
      <div className='d-flex justify-content-start align-items-center'>
        <h1 className=' fw-bold d-md-flex justify-content-start pe-5 pt-3 pb-2 mb-3' >Inventatio</h1>
        <input
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder='Buscar...'
          className='text-muted form-control w-25 h-50'
        />
      </div>
  
      <div className='table-wrapper-scroll-y my-custom-scrollbar-resumen'>
          <table className="table table-hover table-bordered">
              <thead className="table-light sticky-top ">
                <tr>
                    <th width="4%">ID</th>
                    <th width="23%">Producto</th>
                    <th width="9%" className="text-center">Cantidad</th>
                    <th width="10%" className="text-center">Valor unitario</th>
                    <th width="10%" className="text-center">Total</th>
                    <th width="6%" className="text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {ventasFiltradas.map((inventatio) => {
                    return (
                  <FilaVenta 
                    key = {nanoid()} 
                    inventatio={inventatio}
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
  
  
  const FilaVenta = ({inventatio, setEjecutarConsulta}) => {
    const [edit, setEdit] = useState(false)
    const [openDialog, setOpenDialog] = useState(false);
    const [infoNuevaVenta, setInfoNuevaVenta] = useState({
      producto: inventatio.producto,
      cantidad: inventatio.cantidad,
      valorUnitario: inventatio.valorUnitario,
    });
  
    const actualizarVentas = async () => {
      console.log(infoNuevaVenta);
      //enviar la info al backend
     
      const options = {
        method: 'PATCH',
        url: `http://localhost:5000/inventatio/${inventatio._id}/`,
        headers: { 'Content-Type': 'application/json' },
        data: { ...infoNuevaVenta},
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
        url: `http://localhost:5000/inventatio/${inventatio._id}/`,
        headers: { 'Content-Type': 'application/json' },
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
      setOpenDialog(false);
    };
  
    return (
  
      <tr >
        <td>{inventatio._id.slice(18)}</td>
        {edit ? (
          <>
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
          <td>{inventatio.producto}</td>
          <td className="text-center">{inventatio.cantidad}</td>
          <td className="text-center">{`  $ ${inventatio.valorUnitario}`}</td>        
          </>
        )}
  
          <td className="text-center">{`  $ ${parseInt(inventatio.cantidad) * parseInt(inventatio.valorUnitario)} `} </td>
          <td>
            <div className= 'd-flex justify-content-evenly'>
              {edit ? (
                <>
                 <Tooltip title='Confirmar' arrow>
                  <i 
                  onClick={()=> actualizarVentas()}
                  className='fas fa-check btn-success shadow-none btn-sm '
                  />
                </Tooltip>
                <Tooltip title='Cancelar' arrow>
                  <i
                    onClick={() => setEdit(!edit)}
                    className='fas fa-ban btn-info shadow-none btn-sm'
                  />
                </Tooltip>
              </>
                
              ):(
                <>
                <Tooltip title='Editar' arrow>
                  <i onClick={()=> setEdit(!edit)} 
                  className='fas fa-edit btn-outline-warning btn-sm'
                  />
                </Tooltip>
                 <Tooltip title='Eliminar' arrow>
                 <i 
                   onClick={() => setOpenDialog(true)}
                   className='fas fa-trash-alt btn-outline-danger btn-sm'
                 />
               </Tooltip>
               </>
              )}
             
            </div>
  
            <Dialog open={openDialog}> 
                <div>
                  <h4 className='text-center m-3 p-3' /* Cuadrar Estilos*/>
                    ¿Está seguro de eliminar la venta?
                  </h4>
                  <div className='btn-group d-flex justify-content-end'>
                    <button
                      onClick={() => eliminarVenta()}
                      className=' btn btn-outline-danger shadow-none btn-sm m-1 p-1 rounded-pill'
                    >
                      Sí
                    </button>
                    <button
                      onClick={() => setOpenDialog(false)}
                      className='btn btn-success shadow-none btn-sm m-1 p-1 rounded-pill'
                    >
                      No
                    </button>
                  </div>
                </div>
              </Dialog>
  
          </td>
      </tr>
    );
  }
  
  const FormularioIngresarProducto = ({ setMostrarTabla, listaProductos, setInventatio }) => {
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
        url: 'http://localhost:5000/inventatio/',
        headers: { 'Content-Type': 'application/json' },
        data: { 
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
  
export default Inventario