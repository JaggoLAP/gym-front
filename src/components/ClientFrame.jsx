import 'react';

// eslint-disable-next-line react/prop-types
const ClientFrame = ({ userName, cuotaStatus }) => {
  return (
    <div className="box" style={{ width: "100%", maxWidth: "100%", padding: "20px" }}>
      <h2 className="title has-text-centered">{userName}</h2>
      <p className="subtitle has-text-centered">
        {cuotaStatus === 'al día' ? (
          <span className="has-text-success">¡Cuota al día!</span>
        ) : (
          <span className="has-text-warning">Próxima a vencer</span>
        )}
      </p>
    </div>
  );
};

export default ClientFrame;