import  { useState } from 'react';

// eslint-disable-next-line react/prop-types
const InscriptionForm = ({ activity }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Inscripción realizada para:', { name, email, activity: activity.name });
    // backend
  };

  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Inscripción a {activity.name}</p>
        </header>
        <section className="modal-card-body">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Nombre</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Ingresa tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Correo Electrónico</label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  placeholder="ejemplo@correo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="field">
              <button type="submit" className="button is-primary">
                Confirmar Inscripción
              </button>
            </div>
          </form>
        </section>
        <footer className="modal-card-foot">
          <button className="button" onClick={() => setIsFormVisible(false)}>
            Cerrar
          </button>
        </footer>
      </div>
    </div>
  );
};

export default InscriptionForm;
