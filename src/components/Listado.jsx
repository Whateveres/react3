import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const Listado = ({ colaboradores, eliminarColaborador }) => {
  return (
    <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Teléfono</th>
        </tr>
      </thead>
      <tbody>

        {/*Itera sobre arreglo de colaboradores para generar fila por cada uno*/}
        {colaboradores.map((colaborador, index) => (
          
          <tr key={colaborador.id}>
            <td>{index + 1}</td>
            <td>{colaborador.nombre}</td>
            <td>{colaborador.correo}</td>
            <td>{colaborador.edad}</td>
            <td>{colaborador.cargo}</td>
            <td>{colaborador.telefono}</td>
            <td>

              {/*Botón para eliminar colaborador*/}
              <Button
                variant="danger"
                onClick={() => eliminarColaborador(colaborador.id)}
              >
                Eliminar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Listado;
