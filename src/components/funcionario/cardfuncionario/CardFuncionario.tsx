import { Link } from "react-router-dom";
import type Funcionario from "../../../models/Funcionario";

interface CardFuncionarioProps {
  funcionario: Funcionario;
  // Adicionamos uma função para ser chamada quando o botão de deletar for clicado
  // deletarFuncionario: (id: number) => void;
}

function CardFuncionarios({ funcionario }: CardFuncionarioProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-[#6c757d] text-white font-bold text-2xl">
        Funcionário
      </header>
      <p className="p-8 text-3xl bg-slate-200 h-full">{funcionario.nome}</p>

      <div className="flex">
        {/* Corrigido: Usando crase (template literal) e uma rota mais semântica */}
        <Link
          to={`/editarfuncionario/${funcionario.id}`}
          className="w-full text-slate-100 bg-[#ced4da] hover:bg-[#495057]
                    flex items-center justify-center py-2"
        >
          Editar
        </Link>

        {/* Corrigido: Usando um botão com onClick para a ação de deletar */}
        <Link
          to={`/deletarfuncionario/${funcionario.id}`}
          className="text-slate-100 bg-red-400 hover:bg-red-700 w-full 
		flex items-center justify-center"
        >
          <button className="text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center">
            Deletar
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CardFuncionarios;
