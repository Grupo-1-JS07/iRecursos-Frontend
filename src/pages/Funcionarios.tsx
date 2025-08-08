import React from "react";
import ListaFuncionarios from "../components/funcionario/listafuncionario/listaFuncionario";

const Funcionarios: React.FC = () => {
  return (
    <>
      <div className="container mx-auto my-4">
        <h1 className="text-4xl font-bold text-center">
          Gerenciamento de Funcionários
        </h1>
      </div>
      <ListaFuncionarios />
    </>
  );
};

export default Funcionarios;