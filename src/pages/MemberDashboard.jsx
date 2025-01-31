import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import authService from '../services/authService'; 
import pesasImage from '../assets/pesas.jpg';

const MemberDashboard = () => {
  const [socio, setSocio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSocioData = async () => {
      const userData = JSON.parse(localStorage.getItem('user'));
      const id = userData.socioId; 
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/socios/${id}`);
        if (!response.ok) {
          throw new Error('Error al obtener los datos del socio');
        }
        const data = await response.json();
        setSocio(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSocioData();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
      style={{
        padding: '2rem',
        backgroundImage: `url(${pesasImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backdropFilter: 'blur(10px)',
        borderRadius: '10px',
        color: 'white',
      }}
    >
      <h1 className="text-3xl font-bold">Panel de Socios</h1>
      <p className="mt-2">¡Bienvenido, {socio.nombre} {socio.apellido}!</p>
      <div className="mt-4">
        <h2 className="text-xl">Datos Personales</h2>
        <p>Email: {socio.email}</p>
        <p>Teléfono: {socio.telefono}</p>
        <p>Dirección: {socio.direccion}</p>
        <p>Estado: {socio.estado}</p>
      </div>
      
      <div className="mt-4">
        <h2 className="text-xl">Acciones Rápidas</h2>
        <div className="mt-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 mr-2">Ver Estado de Cuenta</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300 mr-2">Inscribirse en Actividades</button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-300 mr-2">Actualizar Datos Personales</button>
          <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition duration-300">Notificaciones</button>
        </div>
      </div>
      <Link to="/">
        <button className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-300">Volver</button>
      </Link>
    </div>
  );
};

export default MemberDashboard;