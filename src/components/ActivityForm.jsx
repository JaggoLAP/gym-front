import  { useState } from 'react';

const ActivityForm = () => {
  const [activity, setActivity] = useState('');
  const [schedule, setSchedule] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('¡Inscripción realizada con éxito!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Inscripción en Actividades</h2>
      <label htmlFor="activity">Selecciona una actividad:</label>
      <select id="activity" value={activity} onChange={(e) => setActivity(e.target.value)} required>
        <option value="">--Selecciona una opción--</option>
        <option value="yoga">Yoga</option>
        <option value="pilates">Pilates</option>
        <option value="crossfit">CrossFit</option>
        <option value="zumba">Zumba</option>
      </select>

      <label htmlFor="schedule">Selecciona un horario:</label>
      <select id="schedule" value={schedule} onChange={(e) => setSchedule(e.target.value)} required>
        <option value="">--Selecciona un horario--</option>
        <option value="morning">Mañana</option>
        <option value="afternoon">Tarde</option>
        <option value="evening">Noche</option>
      </select>

      <button type="submit">Inscribirse</button>
    </form>
  );
};

export default ActivityForm;
