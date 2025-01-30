import 'react';
import Navbar from '../components/navBar';
import Footer from '../components/Footer';
import ActivitiesList from '../components/ActivitiesList';
import ClientsList from '../components/ClientsList';

const EmployeePage = () => {
  return (
    <div>
      <Navbar />
      <section className="section">
        <div className="container">
          <h1 className="title">Panel de Administración</h1>
          
          {/* Sección de Actividades */}
          <div className="box">
            <h2 className="subtitle">Gestionar Actividades</h2>
            <ActivitiesList />
          </div>

          {/* Sección de Clientes */}
          <div className="box">
            <h2 className="subtitle">Gestionar Clientes</h2>
            <ClientsList />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EmployeePage;