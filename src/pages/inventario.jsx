import { nanoid } from 'nanoid';
import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layaut from '../layouts/layaut';
import { Dialog, Tooltip } from '@mui/material';
import {crearProducto, editarInventario, eliminarInventario, obtenerInventario} from '../utils/api';
import PrivateComponent from '../components/privateComponent';

function Inventario () {
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [inventario, setInventario] = useState([]);
    const [textoBoton, setTextoBoton] = useState('Crear un nuevo producto');
    const [colorBoton, setColorBoton] = useState('indigo');
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);      
    
    const obtenerProductosInventario = async () => {
    
      await obtenerInventario(
        (response) => {
          setInventario(response.data);
        },(error) => {
          console.error(error);
        });
      setEjecutarConsulta(false);
    };
  
    useEffect(() => {
      console.log('consulta', ejecutarConsulta);
      if (ejecutarConsulta) {
        obtenerProductosInventario();
      }
    }, [ejecutarConsulta]);
  
    useEffect(() => {
      //obtener lista de productos desde el backend
      if (mostrarTabla) {
        setEjecutarConsulta(true);
      }
    }, [mostrarTabla]);
  
    useEffect(() => {
      if (mostrarTabla) {
        setTextoBoton('Nuevo producto');
        setColorBoton('info');
      } else {
        setTextoBoton('inventario');
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
          <TablaProductos listaProductos={inventario} setEjecutarConsulta={setEjecutarConsulta}/>
        ) : (
          <FormularioIngresarProducto
            setMostrarTabla={setMostrarTabla}
            listaProductos={inventario}
            setInventario={setInventario}
          />
        )}
        <ToastContainer position='bottom-center' autoClose={2000} />
      </div>
      
      </Layaut>
    );
  };
  
  const TablaProductos = ({listaProductos, setEjecutarConsulta}) => {
  
    const [busqueda, setBusqueda] = useState('');
    const [productoFiltradas, setProductoFiltradas] = useState(listaProductos);
  
    useEffect(() => {
      setProductoFiltradas(
        listaProductos.filter((elemento) => {
          return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
        })
      );
    }, [busqueda, listaProductos]);
  
    return (   
      <>
      <div className='d-flex justify-content-start align-items-center'>
        <h1 className=' fw-bold d-md-flex justify-content-start pe-5 pt-3 pb-2 mb-3' >Inventario</h1>
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
                    <th width="14%">ID</th>
                    <th width="45%">Producto</th>
                    <th width="20%" className="text-center">Valor unitario</th>                   
                    <th width="15%" className="text-center">Estado</th>
                    <th width="6%" className="text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {productoFiltradas.map((inventario) => {
                    return (
                  <FilaVenta 
                    key = {nanoid()} 
                    inventario={inventario}
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
  
  
  const FilaVenta = ({inventario, setEjecutarConsulta}) => {
    const [edit, setEdit] = useState(false)
    const [openDialog, setOpenDialog] = useState(false);
    const [infoNuevoProducto, setInfoNuevoProducto] = useState({
      producto: inventario.producto,    
      valorUnitario: inventario.valorUnitario,
      estado: inventario.estado,
    });
  
    const actualizarProductos = async () => {
     
      await editarInventario(
        inventario._id, 
        infoNuevoProducto,
        (response) => {
          toast.success('Producto modificado con éxito');
          setEdit(false);
          setEjecutarConsulta(true);
          },(error) => {
          toast.error('Error modificando el producto');
          console.error(error);
          }
        );     
    };
  
    const eliminarProducto = async () => {  
      
      await eliminarInventario(
        inventario._id,
        (response) => {
          toast.success('Producto eliminado con éxito');
          setEjecutarConsulta(true);
        }, (error) => {
          console.error(error);
          toast.error('Error eliminando el producto');
          }
        );      
      setOpenDialog(false);
    };
  
    return (
  
      <tr >
        <td>{inventario._id.slice(18)}</td>
        {edit ? (
          <>
            <td>
                <input className='form-control m-0 p-0' 
                type ='text' 
                value={infoNuevoProducto.producto}
                onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, producto: e.target.value })}
                />
            </td>          
            <td>
              <input min={1000} max={50000} className='form-control text-center m-0 p-0'
              value={infoNuevoProducto.valorUnitario}
              onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, valorUnitario: e.target.value })}
              />
            </td>
            <td>               
                <select className='form-select m-0 p-0' 
                    value={infoNuevoProducto.estado}
                    onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, estado: e.target.value })}
                    >        
                    <option>Disponible</option>
                    <option>No Disponible</option> 
                </select>                  
            </td>  
          </>
  
        ): (
          <>           
          <td>{inventario.producto}</td>
          <td className="text-center">{`  $${inventario.valorUnitario}`}</td>        
          <td className="text-center">{inventario.estado}</td>
          </>
        )}
           
          <td>
            <div className= 'd-flex justify-content-evenly'>
              {edit ? (
                <>
                 <Tooltip title='Confirmar' arrow>
                  <i 
                  onClick={()=> actualizarProductos()}
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
                  <h4 className='text-center m-3 p-3' >
                    ¿Está seguro de eliminar el producto?
                  </h4>
                  <div className='btn-group d-flex justify-content-end'>
                    <button
                      onClick={() => eliminarProducto()}
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
  
  const FormularioIngresarProducto = ({ setMostrarTabla, listaProductos, setInventario }) => {
    const form = useRef(null);
  
    const submitForm = async (e) => {
      e.preventDefault();
      const fd = new FormData(form.current);
  
      const nuevoProducto = {};
      fd.forEach((value, key) => {
        nuevoProducto[key] = value;
      });  
   
    await crearProducto({ 
      producto: nuevoProducto.producto,
      valorUnitario: nuevoProducto.valorUnitario,
      estado: nuevoProducto.estado,
     },(response)=> {
       console.log(response.data);
       toast.success('Producto agregado con éxito')
     },(error) => {
       console.error(error);
       toast.error('Error creando un nuevo producto')
     }
    );
  
    setMostrarTabla(true);
    };
  
    return (
  
      <>
        <h2 className='fw-bold d-md-flex justify-content-start pt-3 pb-2 mb-3'>Ingresar nuevo producto</h2>
  
          <div>
          
              <form ref={form} onSubmit={submitForm} className='row justify-content-md-center'>
  
                  <hr/>
                  
                  <div className=' container'>
                      
                      <h4 className='d-md-flex justify-content-start pt-3 pb-2 mb-3'> </h4>
                      
                        <label className='align-middle d-flex w-100 py-3' htmlFor='producto' >
                        Producto
                        <input
                            name='producto'
                            className=' text-muted form-control ms-5 w-75'
                            type='text'
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

                        <label className=' align-middle d-flex w-100 py-3' htmlFor='estado'>
                        <div className='pe-3 me-2'> Estado</div>
                        <select
                            className='text-muted form-select ms-5 w-75'
                            name='estado'
                            required
                            defaultValue={0}
                        >
                            <option disabled value={0}> Seleccione una opción</option>                    
                            <option>Disponible</option>
                            <option>No disponible</option>                                              
                        </select>                  
                        </label>
                      
                      <div className='container py-5'> 
                          <button
                          type='submit'
                          className='btn btn-success btn-sm'
                          >
                          Guardar nuevo producto
                          </button>
                      </div>
                  </div>
              </form>
            
          </div>
      </>
    );
  };
  
export default Inventario