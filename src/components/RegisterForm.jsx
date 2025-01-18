import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    dob: '',/*fecha de nacimiento*/
  });

  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

   /*cambios en los campos del formulario*/
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

   /*enviar formulario*/
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsRegistered(true); // Muestra el mensaje de éxito
    setTimeout(() => {
      setIsRegistered(false); // Oculta el mensaje después de 3 segundos
      navigate('/'); // Redirige a la página principal
    }, 3000);
    /*console.log('Socio registrado:', formData);*/
    // enviar datos al backend
  };
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', background: '#f9f9f9', borderRadius: '8px' }}>
      <h2>Registro de Socio</h2>
      {isRegistered && <p style={{ color: 'green', fontWeight: 'bold' }}>¡Cliente registrado exitosamente!</p>}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            required />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            required />
        </label>
        <label>
          Teléfono:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            required />
        </label>
        <label>
          Dirección:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            required />
        </label>
        <label>
          Fecha de Nacimiento:
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            required />
        </label>
        <button type="submit" style={{ padding: '10px', background: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Registrar
        </button>
        <Link to={"/"}>
          <button>Volver</button>
        </Link>
      </form>
    </div>
  );
};

export default RegisterForm;