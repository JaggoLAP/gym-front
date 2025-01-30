import React, { useState } from 'react';
import gymBackground from '../assets/gym-background.jpg';
import './Login.css'; // Asegúrate de importar tu archivo CSS
import Navbar from '../components/navBar';
import Footer from '../components/Footer';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    // Aquí puedes agregar la lógica para manejar el inicio de sesión
    console.log('Iniciando sesión con:', username, password);
  };

  return (
    <div>
      
      <section
        className="hero is-fullheight is-primary is-bold"
        style={{
          backgroundImage: `url(${gymBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
          <div className="container has-text-centered">
          <div className="box"  style={{ width: '100%', maxWidth: '400px' }}>
                <h2 className="title is-3 has-text-centered">Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                  <div className="field">
                    <label className="label">Nombre de usuario</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Ingresa tu nombre de usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Contraseña</label>
                    <div className="control">
                      <input
                        className="input"
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {error && <p className="help is-danger">{error}</p>}

                  <div className="field">
                    <div className="control">
                      <button className="button is-primary is-fullwidth" type="submit">
                        Iniciar Sesión
                      </button>
                    </div>
                  </div>
                </form>
              </div>
          </div>
        </div>
      </section>
      
      <section className="section" id="activities">
        <div className="container">
          <h2 className="title">Nuestras Actividades</h2>
          <div className="columns">
            <div className="column">
              <div className="box">
                <h3 className="subtitle">Yoga</h3>
                <p>Relaja tu cuerpo y mente con nuestras clases de yoga.</p>
              </div>
            </div>
            <div className="column">
              <div className="box">
                <h3 className="subtitle">Entrenamiento Funcional</h3>
                <p>Fortalece tu cuerpo con ejercicios intensos y efectivos.</p>
              </div>
            </div>
            <div className="column">
              <div className="box">
                <h3 className="subtitle">Pesas y Cardio</h3>
                <p>Alcanza tus metas con nuestros equipos modernos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
    </div>
  );
};

export default Login;