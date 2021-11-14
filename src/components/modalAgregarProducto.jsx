import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ModalAgregarProducto = () => {

    const [nombreProducto, setNombreProducto] = useState('Este es el valor inicial');
    const [cantidad, setCantidad] = useState([])
    const [valorUnitario, setValorUnitario] = useState([])
    
      const enviarDatosAlBackend = () => {
        console.log('nombre ', nombreProducto, 'valor unitario', valorUnitario, 'cantidad',cantidad);
        toast.success('Producto agregado',{hideProgressBar: true})
      }
      
  

    return (

    <>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button type="button" className="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#editarModal">Agregar producto</button>
    </div>

    <div className="modal fade" id="editarModal" tabindex="-1" aria-labelledby="editarModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
    
                <div className="modal-header">
                <h5 className="modal-title" id="editarModalLabel">Listado de productos</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <table className="table table-hover table-bordered">
            
                    <thead className="table-light">
                        <tr>
                            <th width="60%" scope="col"> Productos </th>
                            <th width="20%" scope="col"> Valor Unitario </th>
                            <th width="20%" scope="col"> Cantidad</th>
                        </tr>
                    </thead>
                    
                    <tbody className = "text-center">
                    
                        <tr>
                            <td> 

                                <select 
                                    onChange = { (e) => {
                                        setNombreProducto(e.target.value)
                                        }
                                    }
                                    value = {nombreProducto}
                                    className="form-select form-select-sm" aria-label=".form-select-sm "
                                    required
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
                                        <option value="Galletas de higado X 5 und"> Galletas de higado X 5 und</option>
                                        <option value="Cabano de res x 10 und"> Cabano de res x 10 und</option>
                                        <option value="Traquea de res"> Traquea de res</option>
                                        <option value="Hueso de res"> Hueso de res</option>
                                    </optgroup>
                                </select>
                                
                            </td>  

                            <td>
                                <input 
                                    onChange={(e) => {
                                        setValorUnitario(e.target.value);
                                        }}
                                    value = {valorUnitario}
                                    type="number" 
                                    min="1300" 
                                    placeholder=" $"  
                                    className="form-control pb-0 mb-2" width= "70px;" 
                                    required
                                    />
                            </td>

                            <td>
                                <input 
                                    onChange={(e) => {
                                        setCantidad(e.target.value);
                                        }}
                                    value = {cantidad}
                                    type="number" 
                                    min="1" 
                                    placeholder=""  
                                    className="form-control pb-0 mb-2 " width= "70px;" 
                                    required
                                    />
                            </td>

                        </tr>          

                    
                    </tbody>
                </table>

                <div className="modal-footer d-grid gap-2 ">
                        <button type="submit" className="btn btn-success btn-sm"
                        onClick={() => {
                            enviarDatosAlBackend()
                        }} 
                        >Agregar</button>
                    <ToastContainer position='top-center' autoClose={2000}/>        
                        
                </div>
                
            </div>
        </div>
    </div>
    </>

    );
  
}

export default ModalAgregarProducto