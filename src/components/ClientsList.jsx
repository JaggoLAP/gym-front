import  { useState, useEffect } from 'react';

const ClientsList = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Aquí deberías hacer una solicitud a la API para obtener los clientes
    const fetchClients = async () => {
      try {
        const response = await fetch('/api/clients');
        const data = await response.json();
        setClients(data);
      } catch (error) {
        console.error('Error fetching clients:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  const handleModifyClient = (clientId) => {
    // Lógica para modificar un cliente
    console.log(`Modificar cliente con ID: ${clientId}`);
  };

  const handleAddClient = () => {
    // Lógica para agregar un cliente
    console.log('Agregar nuevo cliente');
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Lista de Clientes</h2>
      <button onClick={handleAddClient} className="button is-primary">Agregar Cliente</button>
      <table className="table is-striped is-hoverable">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
              <td>
                <button 
                  onClick={() => handleModifyClient(client.id)} 
                  className="button is-info is-small"
                >
                  Modificar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientsList;