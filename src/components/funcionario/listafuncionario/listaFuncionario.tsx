/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { DNA } from 'react-loader-spinner';
import CardFuncionarios from '../cardfuncionario/CardFuncionario';
import type Funcionario from '../../../models/Funcionario';
import { toast } from 'react-toastify';
// import { buscar, deletar } from '../../../services/Service'; // Comentado para não usar o serviço real

function ListaFuncionarios() {
    const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);

    // Função de deletar simulada para funcionar com os dados mocados
    async function deletarFuncionario(id: number) {
        toast.info(`Exclusão do funcionário ${id} simulada!`);
        setFuncionarios(funcionarios.filter(f => f.id !== id));
    }

    // O useEffect agora popula o componente com dados FALSOS (mock) para visualização
    useEffect(() => {
        // Lista de funcionários de exemplo
        const mockData: Funcionario[] = [
            { id: 1, nome: 'Ana Carolina' },
            { id: 2, nome: 'Bruno Marques' },
            { id: 3, nome: 'Carlos Eduardo' },
            { id: 4, nome: 'Daniela Ribeiro' },
            { id: 5, nome: 'Eduardo Costa' },
            { id: 6, nome: 'Fernanda Lima' },
        ];
        setFuncionarios(mockData);
    }, []); // O array vazio garante que isso rode apenas uma vez

    return (
        <>
            {/* A condição de carregamento agora só aparece por uma fração de segundo */}
            {funcionarios.length === 0 && (
                <DNA visible={true} height="200" width="200" ariaLabel="dna-loading" wrapperStyle={{}} wrapperClass="dna-wrapper mx-auto" />
            )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {funcionarios.map((funcionario) => (
                            <CardFuncionarios key={funcionario.id} funcionario={funcionario} deletarFuncionario={deletarFuncionario} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaFuncionarios;