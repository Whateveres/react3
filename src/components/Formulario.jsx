import { useState } from "react";

const Formulario = ({ setAlert, agregarColaborador }) => {

  //Estados del formulario
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");

  //Función para dar formato a email
  const validarEmail = (email) => {
    return email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  };

  //Función para validar los datos antes de enviar el formulario
  const validarDatos = (e) => {
    e.preventDefault();

    //Si condición Email no es válida, muestra alerta
    if (!validarEmail(email)) {
      setAlert({ message: "El email no es válido", type: "danger" });
      return;
    }

    //Si cualquiera de los campos está vacío, muestra alerta con mensaje de error
    if (
      name === "" ||
      email === "" ||
      edad === "" ||
      cargo === "" ||
      telefono === ""
    ) {
      setAlert({ message: "Completa todos los campos!", type: "danger" });
      return;
    }

    //Si todo es válido:

    //Crea objeto del nuevo colaborador con los datos ingresados
    const nuevoColaborador = {
      nombre: name,
      correo: email,
      edad: edad,
      cargo: cargo,
      telefono: telefono,
    };

    //Agrega al nuevo colaborador a la lista y muestra alerta de éxito
    agregarColaborador(nuevoColaborador);
    setAlert({ message: "Registro exitoso", type: "success" });

    //Si el formulario se envía correctamente, se resetean todos los estados y el formulario
    setName("");
    setEmail("");
    setEdad("");
    setCargo("");
    setTelefono("");
  };

  return (
    <form className="formulario" onSubmit={validarDatos}>
      <div className="form-items">
        <input
          className="item"
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-items">
        <input
          className="item"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-items">
        <input
          className="item"
          type="number"
          placeholder="Edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />
      </div>

      <div className="form-items">
        <input
          className="item"
          type="text"
          placeholder="Cargo"
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
        />
      </div>

      <div className="form-items">
        <input
          className="item"
          type="text"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-dark btn-block boton-submit">
        Agregar colaborador
      </button>
    </form>
  );
};

export default Formulario;
