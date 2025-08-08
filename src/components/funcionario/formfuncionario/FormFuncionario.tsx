/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, type ChangeEvent } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import type Funcionario from "../../../models/Funcionario";
import { buscar, atualizar, cadastrar } from "../../../services/Service";

function FormFuncionario() {

    const navigate = useNavigate();

    const [funcionario, setFuncionario] = useState<Funcionario>({} as Funcionario)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/funcionarios/${id}`, setFuncionario)
        } catch (error: any) {

        }
    }
    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setFuncionario({
            ...funcionario,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/funcionarios")
    }

    async function gerarNovoFuncionario(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, funcionario, setFuncionario)
                alert('O Funcionário foi atualizado com sucesso!')
            } catch (error: any) {
                if (error.toString().includes('401')) {

                } else {
                    alert('Erro ao atualizar o funcionário.')
                }

            }
        } else {
            try {
                await cadastrar(`/funcionarios`, funcionario, setFuncionario)
                alert('O funcionário foi cadastrado com sucesso!')
            } catch (error: any) {
                if (error.toString().includes('401')) {

                } else {
                    alert('Erro ao cadastrar funcionário.')
                }

            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoFuncionario}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome do funcionário</label>
                    <input
                        type="text"
                        placeholder="Nome do seu funcionário"
                        name='nome'
                        className="border-2 border-slate-700 rounded p-2"
                        value={funcionario.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="salarioBase">Salário base do funcionário</label>
                    <input
                        type="text"
                        placeholder="Coloque o salário base do funcionário"
                        name='salarioBase'
                        className="border-2 border-slate-700 rounded p-2"
                        value={funcionario.salarioBase}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                                <div className="flex flex-col gap-2">
                    <label htmlFor="horasTrabalhadas">Horas trabalhadas do funcionário</label>
                    <input
                        type="text"
                        placeholder="Coloque as horas trabalhadas do funcionário"
                        name='horasTrabalhadas'
                        className="border-2 border-slate-700 rounded p-2"
                        value={funcionario.horasTrabalhadas}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                                <div className="flex flex-col gap-2">
                    <label htmlFor="salarioFinal">Salário final do funcionário</label>
                    <input
                        type="text"
                        placeholder="Coloque o salário final do funcionário"
                        name='salarioFinal'
                        className="border-2 border-slate-700 rounded p-2"
                        value={funcionario.salarioFinal}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>                
                <button
                    className="rounded text-slate-100 bg-indigo-400 
                               hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>

                    }
                </button>
            </form>
        </div>
    );
}

export default FormFuncionario;