import { useState, useEffect } from 'react';

const ClientsList = () => {
  const [clients, setClients] = useState([]);
  const [newClient, setNewClient] = useState({
    name: '',
    email: '',
    status: 'Activo',
    cuota: 'Al día',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentClient, setCurrentClient] = useState(null);

  useEffect(() => {
    // Simulación de carga de clientes desde la API
    const fetchClients = async () => {
      const clientsFromApi = [
        { id: 1, name: 'Luis Pérez', email: 'luis@example.com', status: 'Activo', cuota: 'Vencida' },
        { id: 2, name: 'Marian González', email: 'maria@example.com', status: 'Inactivo', cuota: 'Al dia' },
        { id: 3, name: 'Pablo Vargas', email: 'pablo@example.com', status: 'Activo', cuota: 'Al dia' },
      ];
      setClients(clientsFromApi);
    };

    fetchClients();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewClient((prevClient) => ({
      ...prevClient,
      [name]: value,
    }));
  };

  const addClient = () => {
    if (!newClient.name || !newClient.email) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    setClients([...clients, { ...newClient, id: clients.length + 1 }]);
    setNewClient({ name: '', email: '', status: 'Activo', cuota: 'Al día' });
  };

  const editClient = (client) => {
    setIsEditing(true);
    setCurrentClient(client);
    setNewClient(client);
  };

  const saveClient = () => {
    setClients(
      clients.map((client) =>
        client.id === currentClient.id ? { ...client, ...newClient } : client
      )
    );
    setIsEditing(false);
    setNewClient({ name: '', email: '', status: 'Activo', cuota: 'Al día' });
  };

  const deleteClient = (id) => {
    setClients(clients.filter((client) => client.id !== id));
  };

  return (
    <div>
      <h1 className="title">Lista de Clientes</h1>

      {/* Formulario para agregar o editar cliente */}
      <div className="box">
        <input
          type="text"
          className="input"
          name="name"
          value={newClient.name}
          onChange={handleInputChange}
          placeholder="Nombre del cliente"
        />
        <input
          type="email"
          className="input"
          name="email"
          value={newClient.email}
          onChange={handleInputChange}
          placeholder="Correo electrónico"
        />
        <div className="select">
          <select name="status" value={newClient.status} onChange={handleInputChange}>
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
          </select>
        </div>
        <div className="select">
          <select name="cuota" value={newClient.cuota} onChange={handleInputChange}>
            <option value="Al día">Al día</option>
            <option value="Vencida">Vencida</option>
          </select>
        </div>

        {isEditing ? (
          <button className="button is-success" onClick={saveClient}>Guardar Cambios</button>
        ) : (
          <button className="button is-primary" onClick={addClient}>Agregar Cliente</button>
        )}
      </div>

      {/* Lista de clientes */}
      <div className="columns is-multiline">
        {clients.map((client) => (
          <div key={client.id} className="column is-4">
            <div className="card">
              <div className="card-content">
                <h2 className="title is-5">{client.name}</h2>
                <p><strong>Email:</strong> {client.email}</p>
                <p><strong>Estado:</strong> {client.status}</p>
                <p><strong>Cuota:</strong> <span className={client.cuota === 'Vencida' ? 'has-text-danger' : 'has-text-success'}>{client.cuota}</span></p>
                <button className="button is-info" onClick={() => editClient(client)}>Editar</button>
                <button className="button is-danger" onClick={() => deleteClient(client.id)}>Eliminar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsList;