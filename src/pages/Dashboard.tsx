import React from 'react';
import Navbar from '../components/navbar/Navbar';
import ListaFuncionario from '../components/funcionario/listafuncionario/listaFuncionario';
const Dashboard: React.FC = () => {
  return (
    <>
      <Navbar />
      
      <div className="p-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Tabela de Funcionários</h2>
          <ListaFuncionario />
        </div>
      </div>
    </>
  );
};

export default Dashboard;