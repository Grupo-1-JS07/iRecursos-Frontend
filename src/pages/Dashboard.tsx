import React, { useState } from "react";
import ListaFuncionario from "../components/funcionario/listafuncionario/listaFuncionario";
import ListaDepartamentos from "../components/departamento/listadepartamento/ListaDepartamento";
import FormDepartamento from "../components/departamento/formdepartamento/formDepartamentos";

const Dashboard: React.FC = () => {
  const [aba, setAba] = useState<"funcionarios" | "departamentos" | "cadastrar departamento">(
    "funcionarios"
  );
  return (
    <div className="p-6 w-full">
      <div className="flex gap-4 mb-6">
        <button
          className={`px-6 py-2 rounded-t-lg font-semibold border-b-2 transition-colors duration-200 ${
            aba === "funcionarios"
              ? "border-indigo-600 text-indigo-800 bg-white shadow"
              : "border-transparent text-gray-500 bg-gray-100"
          }`}
          onClick={() => setAba("funcionarios")}
        >
          Funcionários
        </button>
        <button
          className={`px-6 py-2 rounded-t-lg font-semibold border-b-2 transition-colors duration-200 ${
            aba === "departamentos"
              ? "border-indigo-600 text-indigo-800 bg-white shadow"
              : "border-transparent text-gray-500 bg-gray-100"
          }`}
          onClick={() => setAba("departamentos")}
        >
          Departamentos
        </button>
                <button
          className={`px-6 py-2 rounded-t-lg font-semibold border-b-2 transition-colors duration-200 ${
            aba === "cadastrar departamento"
              ? "border-indigo-600 text-indigo-800 bg-white shadow"
              : "border-transparent text-gray-500 bg-gray-100"
          }`}
          onClick={() => setAba("cadastrar departamento")}
        >
          Cadastrar Departamento
        </button>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        {aba === "funcionarios" && (
          <>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Tabela de Funcionários
            </h2>
            <ListaFuncionario />
          </>
        )}
        {aba === "departamentos" && (
          <>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Tabela de Departamentos
            </h2>
            <ListaDepartamentos />
          </>
        )}
        {aba === "cadastrar departamento" && (
          <>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Cadastrar Departamentos
            </h2>
            <FormDepartamento />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;