import logo from '../media/Barfut_H-Blanco2.png';
import { useAuth0 } from '@auth0/auth0-react';

const LayoutAunt = () => {
  const { loginWithRedirect } = useAuth0();

    return (

      <header className="navbar navbar-dark sticky-top bg-white flex-md-nowrap p-0">
        <div className="navbar-brand col-md-3 col-lg-2 me-0 px-3 bg-success">
          <img src={logo}  alt="LogoBarfut" width="35" height="32" />
        </div>
      
        <div className="navbar-nav">
          <div className="btn-group btn-group-sm fs-6 border-0">
            <button className="btn btn-success m-1 rounded-pill" onClick={() => loginWithRedirect()}>Iniciar sesión</button>
          </div>
        </div>
      </header>
  );
}

export default LayoutAunt;