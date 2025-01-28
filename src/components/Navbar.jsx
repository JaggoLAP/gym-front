import "react";

const Navbar = () => (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
            Gym Average Joe
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item" href="#activities">Actividades</a>
          <a className="navbar-item" href="#about">Nosotros</a>
          <a className="navbar-item" href="#login">Iniciar Sesión</a>
        </div>
      </div>
    </nav>
  );
  
  export default Navbar;