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
    foto: "",
  });

  function handleBackToLogin() {
    navigate("/");
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUsuario({
      ...usuario,
      [name]: value,
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
      <form
        className="flex justify-center items-center flex-col w-2/3 gap-3 bg-white p-8 rounded-xl shadow-lg"
        onSubmit={cadastrarNovoUsuario}
      >
        <h2 className="text-3xl text-indigo-800 mb-4">Cadastro de Usuário</h2>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="nome" className="text-left text-gray-700">
            Nome
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            value={usuario.nome}
            onChange={atualizarEstado}
            className="border-2 border-slate-300 rounded p-2 focus:outline-indigo-400"
            required
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="email" className="text-left text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={usuario.email}
            onChange={atualizarEstado}
            className="border-2 border-slate-300 rounded p-2 focus:outline-indigo-400"
            required
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="foto" className="text-left text-gray-700">
            Foto (URL)
          </label>
          <input
            id="foto"
            name="foto"
            type="text"
            value={usuario.foto}
            onChange={atualizarEstado}
            className="border-2 border-slate-300 rounded p-2 focus:outline-indigo-400"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="senha" className="text-left text-gray-700">
            Senha
          </label>
          <input
            id="senha"
            name="senha"
            type="password"
            value={usuario.senha}
            onChange={atualizarEstado}
            className="border-2 border-slate-300 rounded p-2 focus:outline-indigo-400"
            required
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="confirmaSenha" className="text-left text-gray-700">
            Confirmar Senha
          </label>
          <input
            id="confirmaSenha"
            name="confirmaSenha"
            type="password"
            value={confirmaSenha}
            onChange={handleConfirmarSenha}
            className="border-2 border-slate-300 rounded p-2 focus:outline-indigo-400"
            required
          />
        </div>
        <div className="flex justify-around w-full gap-8 mt-4">
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
