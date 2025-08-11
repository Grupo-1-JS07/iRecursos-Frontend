import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const TempoLivre: React.FC = () => {
  const [value, setValue] = useState<Value>(new Date());

  return (
    <div className="w-screen h-screen flex flex-col bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-2 text-center">Gestão de Tempo Livre</h1>
      <p className="mb-4 text-center">Visualize suas férias, folgas e outros eventos.</p>

      <div className="flex-grow flex justify-center items-center">
        <div className="bg-white p-4 rounded shadow-lg">
          <Calendar
            onChange={(newValue) => setValue(newValue as Value)}
            value={value ?? new Date()}
            locale="pt-BR"
            selectRange
          />
        </div>
      </div>

      <div className="text-center mt-4">
        <strong>Data selecionada: </strong>
        {Array.isArray(value)
          ? `${value[0]?.toLocaleDateString("pt-BR")} até ${value[1]?.toLocaleDateString("pt-BR")}`
          : value?.toLocaleDateString("pt-BR")}
      </div>
    </div>
  );
};

export default TempoLivre;