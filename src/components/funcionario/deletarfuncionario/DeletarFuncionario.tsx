import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Funcionario from "../../../models/Funcionario";
import { RotatingLines } from "react-loader-spinner";
import { buscar, deletar } from "../../../services/Service";

function DeletarFuncionario() {
  const navigate = useNavigate();

  const [funcionario, setFuncionario] = useState<Funcionario>(
    {} as Funcionario
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/funcionarios/${id}`, setFuncionario);
    } catch (error: any) {
      if (error.toString().includes("401")) {
        <></>;
      }
    }
  }

  console.log(funcionario);
  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarFuncionario() {
    setIsLoading(true);

    try {
      await deletar(`/funcionarios/${id}`);

      alert("Funcionário apagado com sucesso");
    } catch (error: any) {
      if (error.toString().includes("401")) {
        <></>;
      } else {
        alert("Erro ao deletar o funcionário.");
      }
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/funcionarios");
  }

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar funcionário</h1>
      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar o funcionário a seguir?
      </p>
      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-indigo-600 text-white font-bold text-2xl">
          Funcionario
        </header>
        <p className="p-8 text-3xl bg-slate-200 h-full">{funcionario.nome}</p>
        <div className="flex">
          <button
            className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-full text-slate-100 bg-indigo-400 
                        hover:bg-indigo-600 flex items-center justify-center"
            onClick={deletarFuncionario}
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
export default DeletarFuncionario;
