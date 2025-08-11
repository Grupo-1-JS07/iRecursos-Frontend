import { UserCircle } from "@phosphor-icons/react";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <div
      className="bg-white shadow-md p-6 flex
         items-center justify-between"
    >
      <div
        className="text-2xl font-bold
        text-gray-800"
      >
        iRecursos - Sistema de Recursos Humanos
      </div>

      {/*Perfil*/}
      <div className="flex items-center">
        <UserCircle size={32} className="text-gray-500" />
      </div>
    </div>
  );
};

export default Navbar;
