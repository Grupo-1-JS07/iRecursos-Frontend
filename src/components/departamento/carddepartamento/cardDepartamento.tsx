import { Link } from "react-router-dom";
import type Departamento from "../../../models/Departamento";

interface CardDepartamentosProps {
  departamento: Departamento;
}

function CardDepartamentos({ departamento }: CardDepartamentosProps) {
  return (
    <div className="border border-slate-200 flex flex-col rounded-xl overflow-hidden bg-white transition-shadow hover:shadow-lg min-h-[160px]">
      <header className="py-2 px-4 bg-indigo-50 text-indigo-800 font-semibold text-lg tracking-wide border-b border-slate-100">
        Departamento
      </header>
      <p className="px-4 py-6 text-2xl text-slate-700 flex-1 flex items-center justify-center text-center">
        {departamento.nome_departamento}
      </p>
      <div className="flex gap-2 px-3 pb-3 justify-end">
        <Link
          to={`/editardepartamento/${departamento.id}`}
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
        </Link>
        <Link
          to={``}
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
        </Link>
      </div>
    </div>
  );
}

export default CardDepartamentos;
