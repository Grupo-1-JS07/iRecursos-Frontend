/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty */

import { useState, useEffect } from "react";
import type Departamento from "../../../models/Departamento";
import { buscar } from "../../../services/Service";

function ListaDepartamentos() {
  const [departamentos, setDepartamentos] = useState<Departamento[]>([]);

  async function buscarDepartamentos() {
    try {
      await buscar("/departamentos", setDepartamentos);
    } catch (error: any) {}
  }

  useEffect(() => {
    buscarDepartamentos();
  }, [departamentos.length]);

  // Nomes de chefes de exemplo
  const chefes = [
    "João Silva",
    "Maria Oliveira",
    "Carlos Souza",
    "Ana Paula",
    "Fernanda Lima",
    "Ricardo Alves",
    "Patrícia Gomes",
    "Lucas Pereira",
    "Juliana Costa",
    "Marcos Dias",
    "Camila Rocha",
    "Bruno Martins",
    "Aline Barbosa",
    "Felipe Mendes",
    "Larissa Ramos",
  ];

  // Distribuição de funcionários
  const totalFuncionarios = 5420;
  const qtdDepartamentos = departamentos.length;
  // Distribui de forma igualitária, o resto vai para os primeiros departamentos
  let funcionariosPorDepartamento: number[] = [];
  if (qtdDepartamentos > 0) {
    const base = Math.floor(totalFuncionarios / qtdDepartamentos);
    const resto = totalFuncionarios % qtdDepartamentos;
    funcionariosPorDepartamento = Array(qtdDepartamentos)
      .fill(base)
      .map((v, i) => v + (i < resto ? 1 : 0));
  }

  return (
    <>
      {departamentos.length > 0 && (
        <div className="overflow-x-auto w-full">
          <div className="flex flex-wrap gap-6 mb-4">
            <div className="bg-indigo-50 text-indigo-800 rounded-lg px-6 py-3 font-semibold shadow-sm">
              Total de funcionários: <span className="font-bold">5420</span>
            </div>
            <div className="bg-green-50 text-green-800 rounded-lg px-6 py-3 font-semibold shadow-sm">
              Posições abertas: <span className="font-bold">12</span>
            </div>
          </div>
          <table className="min-w-full bg-white border border-slate-200 rounded-xl shadow-md">
            <thead>
              <tr className="bg-indigo-100 text-indigo-900">
                <th className="py-3 px-4 text-left">
                  <input
                    type="checkbox"
                    className="accent-indigo-500"
                    disabled
                  />
                </th>
                <th className="py-3 px-4 text-left">Nome do Departamento</th>
                <th className="py-3 px-4 text-left">Chefe do Departamento</th>
                <th className="py-3 px-4 text-left">Nº de Funcionários</th>
                <th className="py-3 px-4 text-left">Orçamento</th>
                <th className="py-3 px-4 text-center">Ações</th>
              </tr>
            </thead>
            <tbody>
              {departamentos.map((departamento, idx) => (
                <tr
                  key={departamento.id}
                  className="border-b hover:bg-indigo-50 transition"
                >
                  <td className="py-2 px-4">
                    <input type="checkbox" className="accent-indigo-500" />
                  </td>
                  <td className="py-2 px-4 font-semibold">
                    {departamento.nome_departamento}
                  </td>
                  <td className="py-2 px-4 text-slate-600">
                    {departamento.chefeDepartamento &&
                    departamento.chefeDepartamento.trim() !== ""
                      ? departamento.chefeDepartamento
                      : chefes[idx % chefes.length]}
                  </td>
                  <td className="py-2 px-4">
                    {departamento.funcionario &&
                    Array.isArray(departamento.funcionario) &&
                    departamento.funcionario.length > 0
                      ? departamento.funcionario.length
                      : funcionariosPorDepartamento[idx] || 0}
                  </td>
                  <td className="py-2 px-4">
                    <span className="inline-block px-2 py-1 rounded bg-green-50 text-green-700 text-xs font-semibold">
                      R$ {10000 + departamento.id * 1000}
                    </span>
                  </td>
                  <td className="py-2 px-4 flex gap-2 justify-center">
                    <a
                      href={`/editardepartamento/${departamento.id}`}
                      className="p-2 rounded-full hover:bg-indigo-100 text-indigo-500 hover:text-indigo-700 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-200"
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
                    </a>
                    <a
                      href={``}
                      className="p-2 rounded-full hover:bg-red-100 text-red-500 hover:text-red-700 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-red-200"
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

export default ListaDepartamentos;
