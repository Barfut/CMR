import logo from '../media/Barfut_H-Blanco2.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

      <header className="navbar navbar-dark sticky-top bg-white flex-md-nowrap p-0">
        <div className="navbar-brand col-md-3 col-lg-2 me-0 px-3 bg-success">
          <img src={logo}  alt="LogoBarfut" width="35" height="32" />
        </div>
      
        <div className="navbar-nav">
          <div className="nav-item text-nowrap bg-white">
            <Link to='/login' className="nav-link px-3 text-dark">Salir</Link>
          </div>
        </div>
      </header>
  );
}

export default Header;