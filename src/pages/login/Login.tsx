import { useState, type ChangeEvent, type FormEvent } from "react";

function Login() {
  const [usuarioLogin, setUsuarioLogin] = useState({
    email: "",
    senha: ""
  });

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    });
  }

  function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Email:", usuarioLogin.email);
    console.log("Senha:", usuarioLogin.senha);
    alert("Login realizado! (simulação)");
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
      <form
        className="flex justify-center items-center flex-col w-1/2 gap-4"
        onSubmit={login}
      >
        <h2 className="text-slate-900 text-5xl">Entrar</h2>

        <div className="flex flex-col w-full">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
            className="border-2 border-slate-700 rounded p-2"
            value={usuarioLogin.email}
            onChange={atualizarEstado}
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Senha"
            className="border-2 border-slate-700 rounded p-2"
            value={usuarioLogin.senha}
            onChange={atualizarEstado}
          />
        </div>

        <button
          type="submit"
          className="rounded bg-indigo-400 flex justify-center hover:bg-indigo-900 text-white w-1/2 py-2"
        >
          Entrar
        </button>

        <hr className="border-slate-800 w-full" />

        <p>
          Ainda não tem uma conta?{" "}
          <a href="/cadastro" className="text-indigo-800 hover:underline">
            Cadastre-se
          </a>
        </p>
      </form>

      <div className="fundoLogin hidden lg:block"></div>
    </div>
  );
}

export default Login;
