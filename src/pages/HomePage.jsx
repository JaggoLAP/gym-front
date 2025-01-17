import 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Bienvenido al Gimnasio Average Joe</h1>
      <h2>De Peter Le Fleur</h2>
      <p>Gestiona socios y actividades de manera sencilla.</p>
      
      <div style={{ marginTop: '1rem' }}>
        {/* Enlaces a otras páginas */}
        <Link to="/register" style={{ margin: '0 1rem', textDecoration: 'none', color: 'blue' }}>
          Registrar Socio
        </Link>
        <Link to="/employee-dashboard" style={{ margin: '0 1rem', textDecoration: 'none', color: 'blue' }}>
          Panel de Empleados
        </Link>
        <Link to="/member-dashboard" style={{ margin: '0 1rem', textDecoration: 'none', color: 'blue' }}>
          Panel de Socios
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
