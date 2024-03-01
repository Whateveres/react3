import { Alert } from "react-bootstrap";

const Alerta = ({ message, type }) => {
  if (!message) return null;

  return (
    <Alert variant={type} className="alert-message">
      {message}
    </Alert>
  );
};

export default Alerta;
