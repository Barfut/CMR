import logo from './media/Barfut_H-Blanco2.png';

function navbar (){
    return (

        <header class="navbar navbar-dark sticky-top bg-white flex-md-nowrap p-0">
        <div class="navbar-brand col-md-3 col-lg-2 me-0 px-3 bg-success">
            <img src={logo}  alt="LogoBarfut" width="35" height="32" />
        </div>
        
        <div class="navbar-nav">
          <div class="nav-item text-nowrap bg-white">
            <a class="nav-link px-3 text-dark" href="./login.html">Salir</a>
          </div>
        </div>
      </header>
    );
}

export default navbar