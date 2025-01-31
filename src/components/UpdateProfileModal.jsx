// UpdateProfileModal.jsx
import React, { useState } from 'react';

const UpdateProfileModal = ({ isOpen, onClose, socio, onSave }) => {
  const [nombre, setNombre] = useState(socio.nombre);
  const [apellido, setApellido] = useState(socio.apellido);
  const [email, setEmail] = useState(socio.email);
  const [telefono, setTelefono] = useState(socio.telefono);
  const [direccion, setDireccion] = useState(socio.direccion);

  const handleSave = () => {
    const updatedSocio = {
      nombre,
      apellido,
      email,
      telefono,
      direccion,
    };
    onSave(updatedSocio);
    onClose(); 
  };

  if (!isOpen) return null; 

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-content">
        <div className="box">
          <h2 className="title">Actualizar sus datos</h2>
          <div className="field">
            <label className="label">Nombre</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Apellido</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Teléfono</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Dirección</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
            </div>
          </div>
          <div className="buttons">
            <button className="button is-success" onClick={handleSave}>
              Guardar Cambios
            </button>
            <button className="button" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfileModal;