/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { DNA } from "react-loader-spinner";
import type Funcionario from "../../../models/Funcionario";
import { buscar } from "../../../services/Service";

function ListaFuncionarios() {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);


  async function buscarFuncionarios() {
    try {
      await buscar("/funcionarios", setFuncionarios);
    } catch (error: any) {
      if (error.toString().includes("401")) {
        <></>;
      }
    }
  }

  useEffect(() => {
    buscarFuncionarios();
  }, [funcionarios.length]);


  return (
    <>
      {funcionarios.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      {funcionarios.length > 0 && (
        <div className="overflow-x-auto w-full">
          <table className="min-w-full bg-white border border-slate-200 rounded-xl shadow-md">
            <thead>
              <tr className="bg-indigo-100 text-indigo-900">
                <th className="py-3 px-4 text-left">Nome</th>
                <th className="py-3 px-4 text-left">Salário Final</th>
                <th className="py-3 px-4 text-center">Ações</th>
              </tr>
            </thead>
            <tbody>
              {funcionarios.map((funcionario) => (
                <tr
                  key={funcionario.id}
                  className="border-b hover:bg-indigo-50 transition"
                >
                  <td className="py-2 px-4 font-semibold">
                    {funcionario.nome}
                  </td>
                  <td className="py-2 px-4">
                    {Number(funcionario.salarioFinal).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </td>
                  <td className="py-2 px-4 flex gap-3 justify-center">
                    <a
                      href={`/editarfuncionario/${funcionario.id}`}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500 text-white shadow hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                      title="Editar"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.232 5.232l3.536 3.536M9 13h3l8-8a2.828 2.828 0 10-4-4l-8 8v3zm0 0v3h3"
                        />
                      </svg>
                      <span className="hidden sm:inline">Editar</span>
                    </a>
                    <a
                      href={`/deletarfuncionario/${funcionario.id}`}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500 text-white shadow hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300"
                      title="Deletar"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <span className="hidden sm:inline">Deletar</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default ListaFuncionarios;
