import  { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Iniciando sesión con:', { email, password });
    // Aquí puedes agregar la lógica para el manejo de inicio de sesión
  };

  return (
    <div className="container is-fluid">
      <div className="box" style={{ maxWidth: '400px', margin: '50px auto' }}>
        <h1 className="title has-text-centered">Iniciar Sesión</h1>
        <form onSubmit={handleSubmit}>
          {/* Campo de email */}
          <div className="field">
            <label className="label">Correo Electrónico</label>
            <div className="control has-icons-left">
              <input
                className="input"
                type="email"
                placeholder="ejemplo@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>

          {/* Campo de contraseña */}
          <div className="field">
            <label className="label">Contraseña</label>
            <div className="control has-icons-left">
              <input
                className="input"
                type="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </div>
          </div>

          {/* Botón de inicio de sesión */}
          <div className="field">
            <button type="submit" className="button is-primary is-fullwidth">
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
