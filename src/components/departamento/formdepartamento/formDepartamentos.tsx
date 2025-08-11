/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect, type ChangeEvent } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import type Departamento from "../../../models/Departamento";
import { buscar, atualizar, cadastrar } from "../../../services/Service";

function FormDepartamento() {

    const navigate = useNavigate();

    const [departamento, setDepartamento] = useState<Departamento>({} as Departamento)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/departamentos/${id}`, setDepartamento)
        } catch (error: any) {

        }
    }
    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setDepartamento({
            ...departamento,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/departamentoslista")
    }

    async function gerarNovoDepartamento(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/departamentos`, departamento, setDepartamento)
                alert('O Departamento foi atualizado com sucesso!')
            } catch (error: any) {
                if (error.toString().includes('401')) {

                } else {
                    alert('Erro ao atualizar o departamento.')
                }

            }
        } else {
            try {
                await cadastrar(`/departamentos`, departamento, setDepartamento)
                alert('O departamento foi cadastrado com sucesso!')
            } catch (error: any) {
                if (error.toString().includes('401')) {

                } else {
                    alert('Erro ao cadastrar o departamento.')
                }

            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar Departamento' : 'Editar Departamento'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoDepartamento}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome_departamento">Nome do Departamento</label>
                    <input
                        type="text"
                        placeholder="Nome do seu departamento"
                        name='nome_departamento'
                        className="border-2 border-slate-700 rounded p-2"
                        value={departamento.nome_departamento}
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

export default FormDepartamento;