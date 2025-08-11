import React, { useState } from "react";

const criterios = [
  "Produtividade",
  "Pontualidade",
  "Trabalho em Equipe",
  "Qualidade",
  "Iniciativa",
];

const Performance: React.FC = () => {
  const [funcionario, setFuncionario] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [notas, setNotas] = useState<{ [key: string]: number }>({});
  const [comentario, setComentario] = useState("");

  function handleNota(criterio: string, nota: number) {
    setNotas((prev) => ({ ...prev, [criterio]: nota }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Avaliação salva! (simulação)");
    // Aqui você pode enviar os dados para o backend
  }

  return (
    <div className="p-4 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-xl flex flex-col gap-6"
      >
        <h1 className="text-2xl font-bold text-indigo-800 mb-2">
          Avaliação de Performance
        </h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="funcionario" className="text-gray-700">
            Funcionário
          </label>
          <input
            id="funcionario"
            name="funcionario"
            type="text"
            value={funcionario}
            onChange={(e) => setFuncionario(e.target.value)}
            className="border-2 border-slate-300 rounded p-2 focus:outline-indigo-400"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="periodo" className="text-gray-700">
            Período
          </label>
          <input
            id="periodo"
            name="periodo"
            type="text"
            placeholder="Ex: 01/2025 - 06/2025"
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value)}
            className="border-2 border-slate-300 rounded p-2 focus:outline-indigo-400"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-gray-700 font-semibold">Critérios</span>
          <div className="flex flex-col gap-3">
            {criterios.map((criterio) => (
              <div key={criterio} className="flex items-center gap-4">
                <span className="w-40">{criterio}</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      type="button"
                      key={n}
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-lg font-bold transition-colors ${
                        notas[criterio] === n
                          ? "bg-indigo-500 text-white border-indigo-700"
                          : "bg-slate-100 text-indigo-700 border-slate-300 hover:bg-indigo-100"
                      }`}
                      onClick={() => handleNota(criterio, n)}
                      aria-label={`Nota ${n} para ${criterio}`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="comentario" className="text-gray-700">
            Comentários
          </label>
          <textarea
            id="comentario"
            name="comentario"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            className="border-2 border-slate-300 rounded p-2 focus:outline-indigo-400 min-h-[80px]"
            placeholder="Deixe um feedback ou sugestão..."
          />
        </div>
        <button
          type="submit"
          className="rounded text-white bg-indigo-500 hover:bg-indigo-900 py-2 font-semibold mt-2"
        >
          Salvar Avaliação
        </button>
      </form>
    </div>
  );
};

export default Performance;
