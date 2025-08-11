/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react"
import { RotatingLines } from "react-loader-spinner"
import { useNavigate, useParams } from "react-router-dom"
import type Departamento from "../../../models/Departamento"
import { buscar, deletar } from "../../../services/Service"

function DeletarDepartamento() {

    const navigate = useNavigate()

    const [departamento, setDepartamento] = useState<Departamento>({} as Departamento)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    
    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
        await buscar(`departamentos/${id}`, setDepartamento);
        } catch (error: any) {
          if (error.toString().includes("401")) {
            <></>;
          }
        }
      }

      useEffect(() => {
        if (id !== undefined) {
          buscarPorId(id);
        }
      }, [id]);


    async function deletarDepartamento() {
        setIsLoading(true)

        try {
            await deletar(`/departamentos/${id}`)

            alert('Departamento apagado com sucesso')

        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }else {
                alert('Erro ao deletar o departamento.')
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/departamentos")
    }
    
    return (
<div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar departamento</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o departamento a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>
                    Departamento
                </header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{departamento.nome_departamento}</p>
                <div className="flex">
                    <button 
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-indigo-400 
                        hover:bg-indigo-600 flex items-center justify-center'
                        onClick={deletarDepartamento}>
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarDepartamento

function handleLogout() {
    throw new Error("Function not implemented.")
}
