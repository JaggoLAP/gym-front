import { useState, useEffect } from "react";
import yoga from "../assets/yoga.jpg";
import funcional from "../assets/funcional.jpg";
import pesas from "../assets/pesas.jpg";

const ActivitiesListClient = () => {
  const [activities, setActivities] = useState([]);

  // Simulación de carga de actividades (debería venir del backend)
  useEffect(() => {
    const fetchActivities = async () => {
      const activitiesFromApi = [
        { id: 1, name: "Yoga", description: "Clase de Yoga", schedule: "Lunes a Viernes 8 AM", price: "$10000", imageUrl: yoga },
        { id: 2, name: "Funcional", description: "Entrenamiento Funcional", schedule: "Lunes a Viernes 10 AM", price: "$15000", imageUrl: funcional },
        { id: 3, name: "Pesas", description: "Entrenamiento de Pesas", schedule: "Lunes a Viernes Libre", price: "$15000", imageUrl: pesas },
      ];
      setActivities(activitiesFromApi);
    };

    fetchActivities();
  }, []);

  // Función para inscribirse en una actividad (puedes conectarlo con el backend)
  const handleSignup = (activityId) => {
    alert(`Te has inscrito en la actividad con ID: ${activityId}`);
    // Aquí podrías enviar una solicitud al backend para inscribir al usuario
  };

  return (
    <div className="container">
      <h1 className="title">Actividades Disponibles</h1>

      {/* Mostrar lista de actividades */}
      <div className="columns is-multiline">
        {activities.map((activity) => (
          <div key={activity.id} className="column is-4" >
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={activity.imageUrl} alt={activity.name} />
                    </figure>
                </div>
                <div className="card-content">
                    <h2 className="title">{activity.name}</h2>
                    <p>{activity.description}</p>
                    <p>
                        <strong>Horario:</strong> {activity.schedule}
                    </p>
                    <p>
                        <strong>Precio:</strong> {activity.price}
                    </p>
                    <button className="button is-primary" onClick={() => handleSignup(activity.id)}>
                        Inscribirse
                    </button>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitiesListClient;