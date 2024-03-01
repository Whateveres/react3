//Imports
import "./App.css";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import Buscador from "./components/Buscador";
import Alerta from "./components/Alert";
import BaseColaboradores from "./BaseColaboradores";

//Boostrap imports
import "bootstrap/dist/css/bootstrap.min.css";

//React useState import
import React, { useState } from "react";

const App = () => {
  //Estado para buscar colaborador
  const [search, setSearch] = useState("");

  //Estado que almacena mensaje de error/éxito
  const [alert, setAlert] = useState({
    message: "",
    type: "",
  });

  //Estado para los colaboradores
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);

  //Agrega nuevo colaborador
  const agregarColaborador = (nuevoColaborador) => {
    //reviso último id del listado de colaboradores
    const maxId = colaboradores.reduce(
      (max, colaborador) => Math.max(max, parseInt(colaborador.id)),0
    );
    //luego agrego al nuevo colaborador con el id + 1 (quedando al final del listado)
    nuevoColaborador.id = (maxId + 1).toString();
    setColaboradores([...colaboradores, nuevoColaborador]);
  };

  //Elimina colaborador por su id
  const eliminarColaborador = (id) => {
    setColaboradores((prevColaboradores) =>
      prevColaboradores.filter((colaborador) => colaborador.id !== id)
    );
  };

  //Filtra colaboradores basado en término de búsqueda 'search'
  const colaboradoresFiltrados = search
    ? colaboradores.filter((colaborador) =>
        colaborador.nombre.toLowerCase().includes(search.toLowerCase())
      )
    : colaboradores;

  return (
    <>
      <h1>Lista de colaboradores</h1>

      <Buscador setSearch={setSearch} />

      <div className="container">
        <Listado
          colaboradores={colaboradoresFiltrados}
          eliminarColaborador={eliminarColaborador}
        />

        <div>
          <h5>Agregar colaborador</h5>
          <Formulario
            setAlert={setAlert}
            agregarColaborador={agregarColaborador}
          />
          <Alerta message={alert.message} type={alert.type} />
        </div>
      </div>
    </>
  );
};

export default App;
