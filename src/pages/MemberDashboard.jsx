import 'react';
import { Link } from 'react-router-dom';

const MemberDashboard = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Panel de Socios</h1>
      <p>¡Bienvenido! Administra tu cuenta y actividades.</p>
      
      <div style={{ marginTop: '1rem' }}>
        <button style={{ marginRight: '1rem' }}>Ver Estado de Cuenta</button>
        <button>Inscribirse en Actividades</button>
        <button>Actualizar Datos Personales</button>
        <button>Notificaciones</button>
      </div>
      <Link to="/">
            <button>Volver</button>
        </Link>
    </div>
  );
};

export default MemberDashboard;