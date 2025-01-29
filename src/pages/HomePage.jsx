import 'react';
import  { useState } from 'react';
/*import { Link } from 'react-router-dom';*/
import Navbar from '../components/navBar';
import Footer from '../components/Footer';
import gymBackground from '../assets/gym-background.jpg';
import LoginForm from '../components/LoginForm';

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div>
      <Navbar onLoginClick={toggleModal}/>
      <section
        className="hero is-fullheight is-primary is-bold"
        style={{
          backgroundImage: `url(${gymBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">¡Bienvenido Gimnasio Average Joe!</h1>
            <h2 className="subtitle">
              Descubre actividades para mejorar tu cuerpo y tu mente.
            </h2>
            <button
              className="button is-primary"
              onClick={toggleModal} 
              style={{ marginTop: '20px', display: 'block' }}
            >
              Iniciar Sesión
            </button>
            <a href="/register" 
              className="button is-link is-small" 
              style={{ marginTop: '10px', display: 'block' }}
            >
              Primera Vez → Registrate
            </a>
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
      <Footer />
      {/*Modal para el login*/}
      {isModalOpen && (
        <div className={`modal ${isModalOpen ? 'is-active' : ''}`}>
          <div className="modal-background" onClick={toggleModal}></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Iniciar Sesión</p>
              <button
                className="delete"
                aria-label="close"
                onClick={toggleModal}
              ></button>
            </header>
            <section className="modal-card-body">
              <LoginForm />
            </section>
            <footer className="modal-card-foot">
              <button className="button" onClick={toggleModal}>
                Cerrar
              </button>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
