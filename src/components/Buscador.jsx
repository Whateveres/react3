import React from "react";

const Buscador = ({setSearch}) => {
  return (
    <input
      className="search"
      type="text"
      placeholder="Busca un colaborador"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default Buscador;
