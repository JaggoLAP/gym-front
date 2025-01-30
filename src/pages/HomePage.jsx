import 'react';
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
/*import { Link } from 'react-router-dom';*/
import Navbar from '../components/navBar';
import Footer from '../components/Footer';
import gymBackground from '../assets/gym-background.jpg';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

function HomePage() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
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
        <div className="hero-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
          <div className="container has-text-centered">
            <h1 className="title">¡Bienvenido Gimnasio Average Joe!</h1>
            <h2 className="subtitle">
              Descubre actividades para mejorar tu cuerpo y tu mente.
            </h2>
            <div style={{ display:'flex', justifyContent:'center', marginTop:'20px'}}>
              <button
                className="button is-primary"
                onClick={toggleModal} 
                style={{ marginTop: '20px', display: 'block' }}
              >
                Iniciar Sesión
              </button>
            </div>
            <div style={{marginTop:'10px'}}>
              <p
                className="has-text-white has-text-weight-bold"
                style={{ cursor: 'pointer', marginTop: '10px' }}
                onClick={() => setIsRegisterModalOpen(true)}
              >
                ¿Primera vez? <u>Regístrate</u>
               </p>
              {/*<a href="/register" 
                className="button is-link is-small" 
                style={{color:'white',textDecoration:'underline'}}
              >
                Primera Vez → Registrate
              </a>*/}
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

      {/* Modal para Registro */}
      {isRegisterModalOpen && (
        <div className={`modal is-active`}>
          <div className="modal-background" onClick={() => setIsRegisterModalOpen(false)}></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Registro</p>
              <button className="delete" aria-label="close" onClick={() => setIsRegisterModalOpen(false)}></button>
            </header>
            <section className="modal-card-body">
              <RegisterForm />
            </section>
          </div>
        </div>
      )}

      {/* Botones de prueba para Cliente y Empleado */}
      <div className="buttons is-centered">
        <button className="button is-info" onClick={() => navigate('/cliente')}>
          Página Cliente
        </button>
        <button className="button is-warning" onClick={() => navigate('/empleado')}>
          Página Empleado
        </button>
      </div>
    </div>
  );
}

export default HomePage;
