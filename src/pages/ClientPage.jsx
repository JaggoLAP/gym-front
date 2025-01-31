import ClientFrame from '../components/ClientFrame';
import ActivitiesListClient from '../components/ActivitiesListClient';
import Navbarpages from '../components/Navbarpages';
import Footer from '../components/Footer';

const ClientPage = () => {
  // Información de ejemplo del cliente
  const userName = 'Luis Pérez';
  const cuotaStatus = 'al día'; // Esto lo definirías según los datos del cliente

  return (
    <div className="container is-fluid">
        <Navbarpages />
        <ClientFrame userName={userName} cuotaStatus={cuotaStatus} />
        <ActivitiesListClient />
        <Footer />
    </div>
  );
};

export default ClientPage;