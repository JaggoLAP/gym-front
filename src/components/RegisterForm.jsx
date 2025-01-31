import { useState } from 'react';

const RegisterForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    confirmPassword: '',
    telefono: '',
    direccion: '',
    role: 'cliente', // Por defecto, todos serán clientes
    numeroEmpleado: '', // Solo si el usuario es empleado
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/socios/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          apellido: formData.apellido,
          email: formData.email,
          telefono: formData.telefono,
          direccion: formData.direccion,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        throw new Error('Error al registrar el socio');
      }

      const result = await response.json();
      alert(result.message); 
      onClose(); 
    } catch (error) {
      alert(error.message); 
    }
  };

  return (
    <div className="container is-fluid">
      <div className="box" style={{ maxWidth: '400px', margin: '50px auto' }}>
        <h1 className="title has-text-centered">Registro</h1>
        <form onSubmit={handleSubmit}>

          {/* Nombre */}
          <div className="field">
            <label className="label">Nombre</label>
            <div className="control has-icons-left">
              <input
                className="input"
                type="text"
                name="nombre"
                placeholder="Ingresa tu nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </div>
          </div>

          {/* Apellido */}
          <div className="field">
            <label className="label">Apellido</label>
            <div className="control has-icons-left">
              <input
                className="input"
                type="text"
                name="apellido"
                placeholder="Ingresa tu apellido"
                value={formData.apellido}
                onChange={handleChange}
                required
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </div>
          </div>

          {/* Correo */}
          <div className="field">
            <label className="label">Correo Electrónico</label>
            <div className="control has-icons-left">
              <input
                className="input"
                type="email"
                name="email"
                placeholder="ejemplo@correo.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>

          {/* Contraseña */}
          <div className="field">
            <label className="label">Contraseña</label>
            <div className="control has-icons-left">
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Ingresa tu contraseña"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </div>
          </div>

          {/* Confirmar Contraseña */}
          <div className="field">
            <label className="label">Confirmar Contraseña</label>
            <div className="control has-icons-left">
              <input
                className="input"
                type="password"
                name="confirmPassword"
                placeholder="Confirma tu contraseña"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </div>
          </div>

          {/* Telefono */}
          <div className="field">
            <label className="label">Teléfono</label>
            <div className="control has-icons-left">
              <input
                className="input"
                type="text"
                name="telefono"
                placeholder="3876543210"
                value={formData.telefono}
                onChange={handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-phone"></i>
              </span>
            </div>
          </div>

          {/* Direccion */}
          <div className="field">
            <label className="label">Dirección</label>
            <div className="control has-icons-left">
              <input
                className="input"
                type="text"
                name="direccion"
                placeholder="Calle Nro 20"
                value={formData.direccion}
                onChange={handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-map-marker-alt"></i>
              </span>
            </div>
          </div>

          {/* Selector de Rol */}
          <div className="field">
            <label className="label">Tipo de Usuario</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select name="role" value={formData.role} onChange={handleChange}>
                  <option value="cliente">Cliente</option>
                  <option value="empleado">Empleado</option>
                </select>
              </div>
            </div>
          </div>

          {/* si el usuario es empleado */}
          {formData.role === 'empleado' && (
            <div className="field">
              <label className="label">Número de Empleado</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="text"
                  name="numeroEmpleado"
                  placeholder="Ingresa tu número de empleado"
                  value={formData.numeroEmpleado}
                  onChange={handleChange}
                  required={formData.role === 'empleado'}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-id-badge"></i>
                </span>
              </div>
            </div>
          )}

          {/* Botón de Registro */}
          <div className="field">
            <button type="submit" className="button is-primary is-fullwidth">
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;