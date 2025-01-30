import  { useState } from 'react';
import InscriptionForm from './InscriptionForm';

const activities = [
  { name: 'Yoga', description: 'Relaja cuerpo y mente', time: 'Lunes 8:00 AM', cost: 10 },
  { name: 'Entrenamiento Funcional', description: 'Mejora tu fuerza y resistencia', time: 'Martes 6:00 PM', cost: 12 },
  { name: 'Pesas y Cardio', description: 'Aumenta tu musculatura y resistencia', time: 'Miércoles 9:00 AM', cost: 15 },
];

const ActivitiesList = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const handleInscription = (activity) => {
    setSelectedActivity(activity);
    setIsFormVisible(true);
  };

  return (
    <div className="container">
      <h2 className="title">Nuestras Actividades</h2>
      <div className="columns">
        {activities.map((activity) => (
          <div key={activity.name} className="column">
            <div className="box">
              <h3 className="subtitle">{activity.name}</h3>
              <p>{activity.description}</p>
              <p>Horario: {activity.time}</p>
              <p>Costo: ${activity.cost}</p>
              <button
                className="button is-primary"
                onClick={() => handleInscription(activity)}
              >
                Inscribirse
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Mostrar el formulario de inscripción si está activado */}
      {isFormVisible && selectedActivity && (
        <InscriptionForm activity={selectedActivity} />
      )}
    </div>
  );
};

export default ActivitiesList;