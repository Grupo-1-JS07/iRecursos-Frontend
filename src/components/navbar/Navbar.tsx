import { UserCircle } from '@phosphor-icons/react';
import React from 'react';


const Navbar: React.FC = () => {
    return (
        <div className="bg-white shadow-md p-6 flex
         items-center justify-between">
            <div className="text-2xl font-bold
        text-gray-800">
            iRecursos - Sistema de Recursos Humanos
        </div>

         {/*Estatísticas e Perfil*/}
         <div className="flex items-center space-x-6">
        {/*Cartões de Estatísticas*/}
        <div className="flex items-center p-3
        rounded-md bg-white border border-gray-200">
            <span className="text-sm font-medium
            text-gray-500 mr-2">Total de Funcionários</span>
            <span className="text-xl font-bold
            text-gray-800">5,420</span>
        </div>
        <div className="flex items-center p-3
        rounded-md bg-white border border-gray-200">
            <span className="text-sm font-medium
            text-gray-500 mr-2">Posições Abertas</span>
            <span className="text-xl font-bold
            text-gray-800">12</span>
        </div>

        {/*ícone de Perfil*/}
        <UserCircle size={32}
         className="text-gray-500" />
         </div>
         </div>
    );
};

export default Navbar
  