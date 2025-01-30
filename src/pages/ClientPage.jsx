import ClientFrame from '../components/ClientFrame';
import ActivitiesList from '../components/ActivitiesList';

const ClientPage = () => {
  // Información de ejemplo del cliente
  const userName = 'Luis Pérez';
  const cuotaStatus = 'al día'; // Esto lo definirías según los datos del cliente

  return (
    <div>
      <ClientFrame userName={userName} cuotaStatus={cuotaStatus} />
      <ActivitiesList />
    </div>
  );
};

export default ClientPage;