import  { useState, useEffect } from 'react';
import yoga from '../assets/yoga.jpg';
import funcional from '../assets/funcional.jpg';
import pesas from '../assets/pesas.jpg';

const ActivitiesList = () => {
  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState({
    name: '',
    description: '',
    schedule: '',
    price: '',
    imageUrl: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentActivity, setCurrentActivity] = useState(null);

  // Simular una carga de actividades (esto sería una llamada a la API en la vida real)
  useEffect(() => {
    // Aquí podrías hacer una llamada al backend para obtener las actividades
    const fetchActivities = async () => {
      // Suponiendo que tienes una API que te devuelve las actividades
      const activitiesFromApi = [
        { id: 1, name: 'Yoga', description: 'Clase de Yoga', schedule: 'Lunes a Viernes 8 AM', price: '$10000', imageUrl: yoga },
        { id: 2, name: 'Funcional', description: 'Entrenamiento Funcional', schedule: 'Lunes a Viernes 10 AM', price: '$15000', imageUrl:funcional},
        { id: 2, name: 'Pesas', description: 'Entrenamiento de Pesas', schedule: 'Lunes a Viernes Libre', price: '$15000', imageUrl: pesas },
      ];
      setActivities(activitiesFromApi);
    };

    fetchActivities();
  }, []);

  // Función para manejar cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewActivity((prevActivity) => ({
      ...prevActivity,
      [name]: value,
    }));
  };

  // Función para agregar una nueva actividad
  const addActivity = () => {
    setActivities([...activities, { ...newActivity, id: activities.length + 1 }]);
    setNewActivity({ name: '', description: '', schedule: '', price: '', imageUrl: '' });
  };

  // Función para editar una actividad
  const editActivity = (activity) => {
    setIsEditing(true);
    setCurrentActivity(activity);
    setNewActivity(activity); // Cargar la actividad en el formulario para editarla
  };

  // Función para guardar los cambios de una actividad
  const saveActivity = () => {
    setActivities(
      activities.map((activity) =>
        activity.id === currentActivity.id ? { ...activity, ...newActivity } : activity
      )
    );
    setIsEditing(false);
    setNewActivity({ name: '', description: '', schedule: '', price: '', imageUrl: '' });
  };

  // Función para eliminar una actividad
  const deleteActivity = (id) => {
    setActivities(activities.filter((activity) => activity.id !== id));
  };

  return (
    <div>
      <h1 className="title">Lista de Actividades</h1>

      {/* Formulario para agregar o editar actividad */}
      <div className="box">
        <input
          type="text"
          className="input"
          name="name"
          value={newActivity.name}
          onChange={handleInputChange}
          placeholder="Nombre de la actividad"
        />
        <textarea
          className="textarea"
          name="description"
          value={newActivity.description}
          onChange={handleInputChange}
          placeholder="Descripción de la actividad"
        />
        <input
          type="text"
          className="input"
          name="schedule"
          value={newActivity.schedule}
          onChange={handleInputChange}
          placeholder="Horario de la actividad"
        />
        <input
          type="text"
          className="input"
          name="price"
          value={newActivity.price}
          onChange={handleInputChange}
          placeholder="Precio"
        />
        <input
          type="text"
          className="input"
          name="imageUrl"
          value={newActivity.imageUrl}
          onChange={handleInputChange}
          placeholder="URL de la imagen de fondo"
        />

        {isEditing ? (
          <button className="button is-success" onClick={saveActivity}>Guardar Cambios</button>
        ) : (
          <button className="button is-primary" onClick={addActivity}>Agregar Actividad</button>
        )}
      </div>

      {/* Mostrar lista de actividades */}
      {/* Mostrar lista de actividades */}
      <div className="columns is-multiline">
        {activities.map((activity) => (
          <div key={activity.id} className="column is-4">
            <div className="card" style={{ marginBottom: '10px' }}>
              <div className="card-image">
                <figure className="image is-16by9">
                  <img src={activity.imageUrl} alt={activity.name} />
                </figure>
              </div>
              <div className="card-content">
                <h2 className="title is-4">{activity.name}</h2>
                <p>{activity.description}</p>
                <p><strong>Horario:</strong> {activity.schedule}</p>
                <p><strong>Precio:</strong> {activity.price}</p>
                <button className="button is-info" onClick={() => editActivity(activity)}>Editar</button>
                <button className="button is-danger" onClick={() => deleteActivity(activity.id)}>Eliminar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitiesList;