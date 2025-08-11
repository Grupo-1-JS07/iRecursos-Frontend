/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, type ChangeEvent } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import type Funcionario from "../../../models/Funcionario";
import { buscar, atualizar, cadastrar } from "../../../services/Service";
import type Departamento from "../../../models/Departamento";

function FormFuncionario() {
  const navigate = useNavigate();

  // Lista de departamentos
  const [departamentos, setDepartamentos] = useState<Departamento[]>([]);

  // Departamento selecionado
  const [departamento, setDepartamento] = useState<Departamento>({ id: 0, nome_departamento: "" });

  // Funcionário
  const [funcionario, setFuncionario] = useState<Funcionario>({} as Funcionario);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();

  // Buscar funcionário por ID
  async function buscarPorId(id: string) {
    try {
      await buscar(`/funcionarios/${id}`, (data: Funcionario) => {
        setFuncionario(data);
        setDepartamento(data.departamento || { id: 0, nome_departamento: "" });
      });
    } catch (error: any) {}
  }

  // Buscar todos departamentos
  async function buscarDepartamentos() {
    try {
      await buscar("/departamentos", setDepartamentos);
    } catch (error: any) {}
  }

  useEffect(() => {
    buscarDepartamentos();
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  // Atualizar campos do funcionário
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setFuncionario({
      ...funcionario,
      [e.target.name]: e.target.value,
    });
  }

  // Atualizar departamento escolhido no select
  function atualizarDepartamento(e: ChangeEvent<HTMLSelectElement>) {
    const depId = Number(e.target.value);
    const depSelecionado = departamentos.find((d) => d.id === depId);
    if (depSelecionado) {
      setDepartamento(depSelecionado);
      setFuncionario({ ...funcionario, departamento: depSelecionado });
    }
  }

  function retornar() {
    navigate("/funcionarios");
  }

  async function gerarNovoFuncionario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/funcionarios`, funcionario, setFuncionario);
        alert("O Funcionário foi atualizado com sucesso!");
      } catch (error: any) {
        alert("Erro ao atualizar o funcionário.");
      }
    } else {
      try {
        await cadastrar(`/funcionarios`, funcionario, setFuncionario);
        alert("O funcionário foi cadastrado com sucesso!");
      } catch (error: any) {
        alert("Erro ao cadastrar funcionário.");
      }
    }

    setIsLoading(false);
    retornar();
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? "Cadastrar Funcionário" : "Editar Funcionário"}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoFuncionario}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome do funcionário</label>
          <input
            type="text"
            placeholder="Nome do seu funcionário"
            name="nome"
            className="border-2 border-slate-700 rounded p-2"
            value={funcionario.nome || ""}
            onChange={atualizarEstado}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="salarioBase">Salário Hora do Funcionário</label>
          <input
            type="text"
            placeholder="Informe o Salário Hora do funcionário"
            name="salarioBase"
            className="border-2 border-slate-700 rounded p-2"
            value={funcionario.salarioBase || ""}
            onChange={atualizarEstado}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="horasTrabalhadas">Horas trabalhadas do funcionário</label>
          <input
            type="text"
            placeholder="Informe as horas trabalhadas do funcionário"
            name="horasTrabalhadas"
            className="border-2 border-slate-700 rounded p-2"
            value={funcionario.horasTrabalhadas || ""}
            onChange={atualizarEstado}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p>Departamento do funcionário</p>
          <select
            name="departamento"
            id="departamento"
            className="border p-2 border-slate-800 rounded"
            value={departamento.id || ""}
            onChange={atualizarDepartamento}
          >
            <option value="" disabled>
              Selecione um Departamento
            </option>
            {departamentos.map((dep) => (
              <option key={dep.id} value={dep.id}>
                {dep.nome_departamento}
              </option>
            ))}
          </select>
        </div>

        <button
          className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
          type="submit"
        >
          {isLoading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            />
          ) : (
            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormFuncionario;
