import 'react';
import { Link } from 'react-router-dom';

const EmployeeDashboard = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Panel de Empleados</h1>
      <p>Gestiona las actividades y los socios del gimnasio desde aquí.</p>
      
      <div style={{ marginTop: '1rem' }}>
        <button style={{ marginRight: '1rem' }}>Gestionar Socios</button>
        <button>Gestionar Actividades</button>
      </div>
      <Link to="/">
        <button>Volver</button>
      </Link>
    </div>
  );
};

export default EmployeeDashboard;