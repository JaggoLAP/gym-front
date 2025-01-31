import ActivitiesList from '../components/ActivitiesList';
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext'; 
import UpdateProfileModal from '../components/UpdateProfileModal'; 
import { Link } from 'react-router-dom';
import ConfirmModal from '../components/ConfirmModal'; 
import pesasImage from '../assets/pesas.jpg';

const ClientePage = () => {
  const [socio, setSocio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { logout } = useContext(AuthContext);
  //const history = useHistory(); // Hook para redirigir

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

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveChanges = async (updatedData) => {
    const userData = JSON.parse(localStorage.getItem('user'));
    const id = userData.socioId; 

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/socios/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar los datos del socio');
      }

      const result = await response.json();
      alert(result.message); 
      setSocio((prevSocio) => ({
        ...prevSocio,
        ...updatedData, 
      }));
    } catch (error) {
      alert(error.message); 
    } finally {
      handleCloseModal();
    }
  };

  const handleDeleteAccount = () => {
    setIsConfirmOpen(true); 
  };

  const confirmDeleteAccount = async () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    const id = userData.socioId; 

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/socios/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Error al eliminar la cuenta');
      }

      const result = await response.json();
      alert(result.message); 
      localStorage.removeItem('user'); 
      logout(); //history.push('/'); 
    } catch (error) {
      alert(error.message); 
    } finally {
      setIsConfirmOpen(false); 
    }
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
      style={{
        minHeight: '100vh', 
        width: '100vw',
        padding: '2rem',
        backgroundImage: `url(${pesasImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backdropFilter : 'blur(10px)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          padding: '2rem',
          borderRadius: '10px',
          width: '80%',
          maxWidth: '1200px',
        }}
      >
        {/* Título y nombre del socio */}
        <div style={{ textAlign: 'center' }}>
          <h1 className="text-5xl font-bold mb-4">Panel de Socios</h1>
          <p className="text-4xl mb-2">¡Bienvenido, {socio.nombre} {socio.apellido}!</p>
          <p className="text-3xl">Estado: {socio.estado}</p>
        </div>
        <br />
        {/* Datos personales */}
        <div className="mb-6" style={{ textAlign: 'left' }}>
          <h2 className="text-4xl font-semibold mb-2">Datos Personales</h2>
          <p className="text-3xl">Email: {socio.email}</p>
          <p className="text-2xl">Teléfono: {socio.telefono}</p>
          <p className="text-2xl">Dirección: {socio.direccion}</p>
        </div>

        {/* Línea de separación */}
        <hr style={{ border: '1px solid white', margin: '1rem 0' }} />

        {/* Acciones rápidas */}
        <div className="mb-6">
          <h2 className="text-4xl font-semibold mb-4">Acciones Rápidas</h2>
          <div className="columns is-mobile is-centered"> 
            <div className="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">
              <button
                className="button is-fullwidth has-background-dark has-text-white"
              >
                Ver Estado de Cuenta
              </button>
            </div>
            <div className="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">
              <button
                className="button is-fullwidth has-background-dark has-text-white"
              >
                Inscribirse en Actividades
              </button>
            </div>
            <div className="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">
              <button
                className="button is-fullwidth has-background-dark has-text-white"
                onClick={handleOpenModal} 
              >
                Actualizar Datos Personales
              </button>
            </div>
            <div className="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">
              <button
                className="button is-fullwidth has-background-dark has-text-white"
              >
                Notificaciones
              </button>
            </div>
          </div>
        </div>

        <br />
        {/* Línea de separación */}
        <hr style={{ border: '1px solid white', margin: '1rem 0' }} />

        {/* Lista de actividades */}
        <ActivitiesList />
      </div>

      {/* Botones de cerrar sesión y borrar cuenta */}
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '60%', marginTop: '2rem' }}>
        <Link to="/">
          <button
            className="button is-light" 
            onClick={logout}
          >
            Cerrar Sesión
          </button>
        </Link>
        <button
          className="button is-danger" 
          style={{ backgroundColor: 'red', color: 'white' }} 
          onClick={confirmDeleteAccount}
        >
          Borrar Cuenta
        </button>
      </div>

      {/* Modal para actualizar datos */}
      <UpdateProfileModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        socio={socio}
        onSave={handleSaveChanges}
      />
    </div>
  );
};

export default ClientePage;