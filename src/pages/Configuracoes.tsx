import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Configuracoes: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-gray-50 min-h-[80vh] rounded-xl shadow-lg border border-slate-200">
      <h1 className="text-3xl font-bold mb-8 text-indigo-800 dark:text-indigo-200 flex items-center gap-3">
        <svg
          className="w-8 h-8 text-indigo-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
        Configurações do Sistema
      </h1>

      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
          <svg
            className="w-6 h-6 text-indigo-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2m6.364 1.636l-1.414 1.414M21 12h-2m-1.636 6.364l-1.414-1.414M12 21v-2m-6.364-1.636l1.414-1.414M3 12h2m1.636-6.364l1.414 1.414"
            />
          </svg>
          Preferências de Aparência
        </h2>
        <div className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg shadow p-5 mb-4">
          <div className="flex items-center gap-3">
            <svg
              className="w-6 h-6 text-indigo-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8V6a5 5 0 00-10 0v2a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2z"
              />
            </svg>
            <span className="text-gray-700 dark:text-gray-200 font-medium">
              Modo escuro
            </span>
          </div>
          <button
            onClick={() => setDarkMode((v) => !v)}
            className={`w-14 h-7 flex items-center rounded-full p-1 duration-300 focus:outline-none ${
              darkMode ? "bg-indigo-600" : "bg-gray-300"
            }`}
            aria-label="Alternar modo escuro"
          >
            <span
              className={`w-6 h-6 bg-white rounded-full shadow-md transform duration-300 ${
                darkMode ? "translate-x-7" : ""
              }`}
            ></span>
          </button>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
          <svg
            className="w-6 h-6 text-indigo-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 17l-4 4m0 0l-4-4m4 4V3"
            />
          </svg>
          Acesso
        </h2>
        <div className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg shadow p-5">
          <div className="flex items-center gap-3">
            <svg
              className="w-6 h-6 text-indigo-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-gray-700 dark:text-gray-200 font-medium">
              Acessar Login
            </span>
          </div>
          <button
            onClick={handleLoginClick}
            className="px-5 py-2 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition-colors"
          >
            Ir para Login
          </button>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
          <svg
            className="w-6 h-6 text-indigo-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 10v4m8-8h-4m-4 0H4"
            />
          </svg>
          Outras Configurações
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 text-gray-500 dark:text-gray-400 text-sm">
          <p>
            Em breve: notificações, permissões, integrações e mais opções para o
            sistema de RH.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Configuracoes;
