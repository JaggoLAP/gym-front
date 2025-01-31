import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react';


 
function Navbar () {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  return (
    <div>
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    Gym Average Joe
                </a>
            </div>
            <div className="navbar-menu">
               <div className="navbar-end">
                    <a className="navbar-item" onClick={openModal}>Nosotros</a>
                    <a className="navbar-item" onClick={() => navigate ("/")}>
                        Inicio
                    </a>
                </div>
            </div>
        </nav>

        {/* Modal */}
        {isModalOpen && (
          <div className="modal is-active">
            <div className="modal-background" onClick={closeModal}></div>
            <div className="modal-content">
             <div className="box">
               <h1 className="title">Sobre Nosotros</h1>
                 <p><strong>Bienvenidos a nuestro gimnasio</strong>, un espacio pensado para quienes buscan mejorar su salud y bienestar. Nos enorgullece ofrecer un ambiente seguro, cómodo y profesional para todos nuestros clientes.</p>
                  <p><strong>Objetivos</strong>: Nuestro objetivo principal es ayudarte a alcanzar tus metas físicas, ya sea que busques perder peso, ganar músculo, o simplemente mantenerte activo y saludable. Con planes personalizados y entrenadores calificados, trabajamos de la mano contigo para que logres tus objetivos.</p>
                  <p><strong>Comodidades</strong>: Contamos con instalaciones modernas y equipadas con lo último en maquinaria de gimnasio. Además, ofrecemos áreas de descanso, vestuarios cómodos y duchas para que disfrutes de una experiencia completa.</p>
                 <p><strong>Cordialidad</strong>: Creemos que el trato cercano y amable es esencial. Nuestro equipo está comprometido a ofrecerte una experiencia amigable y personalizada, siempre dispuesto a guiarte y responder a tus inquietudes.</p>
                <p><strong>Amplio horario de atención</strong>: Sabemos que tu tiempo es valioso, por eso ofrecemos un horario extendido de lunes a domingo. Con horarios flexibles, podrás entrenar cuando más te convenga, adaptándonos a tu rutina diaria.</p>
                 <button className="button is-primary" onClick={closeModal}>Cerrar</button>
               </div>
             </div>
             <button className="modal-close is-large" onClick={closeModal}></button>
           </div>
         )}
      </div>
    );
} 
export default Navbar;