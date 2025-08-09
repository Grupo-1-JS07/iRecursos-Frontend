/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

interface Usuario {
  nome: string;
  email: string;
  senha: string;
  foto: string;
}

const Cadastro: React.FC = () => {
  const navigate = useNavigate();

  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [usuario, setUsuario] = useState<Usuario>({
    nome: "",
    email: "",
    senha: "",
    foto: ""
  });

  function handleBackToLogin() {
    navigate("/");
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUsuario({
      ...usuario,
      [name]: value
    });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (usuario.senha !== confirmaSenha) {
      alert("As senhas não conferem!");
      return;
    }
    console.log("Novo usuário:", usuario);
    alert("Cadastro realizado com sucesso! (simulação)");
    handleBackToLogin();
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
      {/* ... */}
      <form
        className="flex justify-center items-center flex-col w-2/3 gap-3"
        onSubmit={cadastrarNovoUsuario}
      >
        {/* ... */}
        <div className="flex justify-around w-full gap-8">
          <button
            type="button" 
            className="rounded text-white bg-red-400 hover:bg-red-700 w-1/2 py-2"
            onClick={handleBackToLogin}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="rounded text-white bg-indigo-400 hover:bg-indigo-900 w-1/2 py-2"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Cadastro;