/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty */

import { useState, useEffect } from "react"
import { DNA } from "react-loader-spinner"
import type Departamento from "../../../models/Departamento"
import { buscar } from "../../../services/Service"
import CardDepartamentos from "../carddepartamento/cardDepartamento"

function ListaDepartamentos() {

    const [departamentos, setDepartamentos] = useState<Departamento[]>([])

    async function buscarDepartamentos() {
        try {
            await buscar('/departamentos', setDepartamentos)
        } catch (error: any) {

        }
    }

    useEffect(() => {
        buscarDepartamentos()    
    }, [departamentos.length])
    
    return (
        <>
        {departamentos.length === 0 && (
            <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
        />
        )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       {departamentos.map((departamento) => (
                            <CardDepartamentos key={departamento.id} departamento={departamento} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaDepartamentos;