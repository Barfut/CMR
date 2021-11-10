import logo from './media/Barfut_H-Blanco.png';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.css';

function login() {
  return ( /* arreglar las a de link y autenticacion con google*/
  
    <div className="text-center">
      <div class="container p-5">
        <div className=" m-4 d-flex justify-content-center align-items-center"  tyle={{height: 100}}> 
          <div className="card border border-2 border-light" style={{width: 450}}>

            <div className="card pt-4 pb-4 text-center bg-success card-header">
              <span>
                <img src={logo} className="img-fluid" alt="LogoBarfut" />
              </span>
            </div>

            <div className="p-4 card-body">

              <div className="text-center w-75 m-auto">
                <h4 className="text-dark-50 fs-1 text-center mt-0 fw-bold">Bienvenido</h4>
                <p className="text-muted mb-3">Ingrese su usuario y contraseña</p>
              </div>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="username" placeholder="Ingrese su usuario" />
                <label for="username">Usuario</label>
              </div>
              <div className="form-floating mb-3">   
                <input type="password" className="form-control" id="password" placeholder="contraseña" />
                <label for="password">Contraseña</label> 
              </div>

              <br />

              <div className="mb-3 mb-0 text-center">
                <a className="btn btn-success" href="./mainPage.html">Iniciar sesión</a>
              </div>

              <br />
              <hr />

              <div className="container pt-4 text-center w-78 ">
                <p className="text-muted mb-3">Tambien puedes</p>
              </div>              

              <div className="mb-3 text-center"> 
                <button type="botton" className="btn btn-success opacity-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                  </svg>
                </button>
              </div>  

            </div>
          </div>
        </div>
      </div>

      <footer class="bd-footer py-3 mt-5 bg-white">2021 © Barfut.com</footer>

    </div>
    
  );
}

export default login;
