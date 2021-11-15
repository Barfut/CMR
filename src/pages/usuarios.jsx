import { nanoid } from 'nanoid';
import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layaut from '../layouts/layaut';
import { Dialog, Tooltip } from '@mui/material';
import {crearUsuario, editarUsuario, eliminarUsuario, obtenerUsuarios} from '../utils/api';


const Usuarios = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [usuarios, setUsuarios] = useState([]);
    const [textoBoton, setTextoBoton] = useState('Crear un nuevo usuario');
    const [colorBoton, setColorBoton] = useState('indigo');
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);        
  
   
  const obtenerUsuario = async () => {
    
    await obtenerUsuarios(
      (response) => {
        setUsuarios(response.data);
      },(error) => {
        console.error(error);
      });
    setEjecutarConsulta(false);
  };
  
  useEffect(() => {
    console.log('consulta', ejecutarConsulta);
    if (ejecutarConsulta) {
      obtenerUsuario();
    }
  }, [ejecutarConsulta]);
  
  
    useEffect(() => {
      //obtener lista de usuarios desde el backend
      if (mostrarTabla) {
        setEjecutarConsulta(true);
      }
    }, [mostrarTabla]);

  
    useEffect(() => {
      if (mostrarTabla) {
        setTextoBoton('Nuevo usuario');
        setColorBoton('info');
      } else {
        setTextoBoton('Usuarios');
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
          <TablaUsuario listaUsuario={usuarios} setEjecutarConsulta={setEjecutarConsulta}/>
        ) : (
          <FormularioIngresarUsuarios
            setMostrarTabla={setMostrarTabla}
            listaUsuario={usuarios}
            setUsuarios={setUsuarios}
          />
        )}
        <ToastContainer position='bottom-center' autoClose={2000} />
      </div>
      </Layaut>
    );
  };
  
  const TablaUsuario = ({listaUsuario, setEjecutarConsulta}) => {
  
    const [busqueda, setBusqueda] = useState('');
    const [usuariosFiltrados, setUsuariosFiltrados] = useState(listaUsuario);
  
    useEffect(() => {
      setUsuariosFiltrados(
        listaUsuario.filter((elemento) => {
          return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
        })
      );
    }, [busqueda, listaUsuario]);
  
    return (   
      <>
      <div className='d-flex justify-content-start align-items-center'>
        <h1 className=' fw-bold d-md-flex justify-content-start pe-5 pt-3 pb-2 mb-3' >Usuarios</h1>
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
                    <th width="5%">ID</th>
                    <th width="23%">Correo electrónico</th>
                    <th width="20%">Apellido</th>
                    <th width="20%">Nombre</th>
                    <th width="13%" className="text-center">Roll</th>                   
                    <th width="13%" className="text-center">Estado</th>
                    <th width="6%" className="text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {usuariosFiltrados.map((usuarios) => {
                    return (
                  <FilaUsuario 
                    key = {nanoid()} 
                    usuarios={usuarios}
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
  
  
  const FilaUsuario = ({usuarios, setEjecutarConsulta}) => {
    const [edit, setEdit] = useState(false)
    const [openDialog, setOpenDialog] = useState(false);
    const [infoNuevoUsuario, setInfoNuevoUsuario] = useState({
      email: usuarios.email,    
      apellido: usuarios.apellido,
      nombre: usuarios.nombre,
      roll: usuarios.roll,
      estado: usuarios.estado,
    });
  
    const actualizarUsuarios = async () => {
      
      await editarUsuario(
        usuarios._id,
        infoNuevoUsuario,
        (response) => {
          toast.success('Usuario modificado con éxito');
          setEdit(false);
          setEjecutarConsulta(true);
          },(error) => {
          toast.error('Error modificando el usuario');
          console.error(error);
          }
        );     
    };
  
    const eliminarUsuarios = async () => {
     
      await eliminarUsuario(
        usuarios._id,
        (response) => {
          toast.success('Usuario eliminado con éxito');
          setEjecutarConsulta(true);
        }, (error) => {
          console.error(error);
          toast.error('Error eliminando el usuario');
          }
        );      
      setOpenDialog(false);
    };
  
    return (
  
      <tr >
        <td>{usuarios._id.slice(18)}</td>
        {edit ? (
          <>
            <td>
                <input className='form-control m-0 p-0' 
                type ='email' 
                value={infoNuevoUsuario.email}
                onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, email: e.target.value })}
                />
            </td>          
            <td>
                <input className='form-control m-0 p-0' 
                type ='text' 
                value={infoNuevoUsuario.apellido}
                onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, apellido: e.target.value })}
                />
            </td> 
            <td>
                <input className='form-control m-0 p-0' 
                type ='text' 
                value={infoNuevoUsuario.nombre}
                onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, nombre: e.target.value })}
                />
            </td> 
            <td>               
                <select className='form-select m-0 p-0' 
                    value={infoNuevoUsuario.roll}
                    onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, roll: e.target.value })}
                    >        
                    <option>Administrador</option>
                    <option>Vendedor</option> 
                </select>                  
            </td> 
            <td>               
                <select className='form-select m-0 p-0' 
                    value={infoNuevoUsuario.estado}
                    onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, estado: e.target.value })}
                    >
                    <option>Pendiente</option>        
                    <option>Autorizado</option>
                    <option>No Autorizado</option> 
                </select>                  
            </td>  
          </>
  
        ): (
          <>           
          <td>{usuarios.email}</td>
          <td>{usuarios.apellido}</td>
          <td>{usuarios.nombre}</td>
          <td className="text-center">{usuarios.roll}</td>
          <td className="text-center">{usuarios.estado}</td>
          </>
        )}
           
          <td>
            <div className= 'd-flex justify-content-evenly'>
              {edit ? (
                <>
                 <Tooltip title='Confirmar' arrow>
                  <i 
                  onClick={()=> actualizarUsuarios()}
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
                    ¿Está seguro de eliminar el usuario?
                  </h4>
                  <div className='btn-group d-flex justify-content-end'>
                    <button
                      onClick={() => eliminarUsuarios()}
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
  
  const FormularioIngresarUsuarios = ({ setMostrarTabla, listaUsuario, setUsuarios }) => {
    const form = useRef(null);
  
    const submitForm = async (e) => {
      e.preventDefault();
      const fd = new FormData(form.current);
  
      const nuevoUsuario = {};
      fd.forEach((value, key) => {
        nuevoUsuario[key] = value;
      });


      await crearUsuario({ 
          email: nuevoUsuario.email,
          apellido: nuevoUsuario.apellido,
          nombre: nuevoUsuario.nombre,
          roll: nuevoUsuario.roll,       
          estado: nuevoUsuario.estado,
        },(response)=> {
          console.log(response.data);
          toast.success('Usuario agregado con éxito')
        },(error) => {
          console.error(error);
          toast.error('Error creando un nuevo usuario')
        }
      );    
      
      setMostrarTabla(true);
    };
  
    return (
  
      <>
        <h2 className='fw-bold d-md-flex justify-content-start pt-3 pb-2 mb-3'>Ingresar nuevo usuario</h2>
  
          <div>
              <form ref={form} onSubmit={submitForm} className='row justify-content-md-center'>
  
                  <hr/>
                  
                  <div className=' container'>
                      
                      <h4 className='d-md-flex justify-content-start pt-3 pb-2 mb-3'> </h4>
                      
                        <label className='align-middle d-flex w-100 py-3' htmlFor='email' >
                        Correo electrónico
                        <input
                            name='email'
                            className=' text-muted form-control ms-4 w-75'
                            type='email'
                            placeholder='...'
                            required
                        />
                        </label> 

                        <label className='align-middle d-flex w-100 py-3 pe-3' htmlFor='apellido' >
                        <div className='pe-2 me-5'>Apellido</div>                        
                        <input
                            name='apellido'
                            className=' text-muted form-control ms-5 w-75'
                            type='text'
                            placeholder='...'
                            required
                        />
                        </label>   

                        <label className='align-middle d-flex w-100 py-3' htmlFor='nombre' >
                        <div className='pe-2 me-5'>Nombre</div>
                        <input
                            name='nombre'
                            className=' text-muted form-control ms-5 w-75'
                            type='text'
                            placeholder='...'
                            required
                        />
                        </label>                                    
                         
                        <label className=' align-middle d-flex w-100 py-3' htmlFor='roll'>
                        <div className='pe-5 me-5'> Roll</div>
                        <select
                            className='text-muted form-select ms-5 w-75'
                            name='roll'
                            required
                            defaultValue={0}
                        >
                            <option disabled value={0}> Seleccione una opción</option>                    
                            <option>Administrador</option>
                            <option>Vendedor</option>                                              
                        </select>                  
                        </label>

                        <label className=' align-middle d-flex w-100 py-3' htmlFor='estado'>
                        <div className='pe-3 me-5'> Estado</div>
                        <select
                            className='text-muted form-select ms-5 w-75'
                            name='estado'
                            required
                            defaultValue={2}
                        >
                            <option>Pendiente</option>        
                            <option>Autorizado</option>
                            <option>No Autorizado</option>
                        </select>                  
                        </label>
                      
                      <div className='container py-5'> 
                          <button
                          type='submit'
                          className='btn btn-success btn-sm'
                          >
                          Guardar nuevo usuario
                          </button>
                      </div>
                  </div>
              </form>
          </div>
      </>
    );
  };

export default Usuarios