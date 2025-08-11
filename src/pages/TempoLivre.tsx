import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const TempoLivre: React.FC = () => {
  const [value, setValue] = useState<Value>(new Date());

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Gestão de Tempo Livre</h1>
      <p className="mb-4">Visualize suas férias, folgas e outros eventos.</p>

      <div className="bg-white p-4 rounded shadow-md inline-block">
        <Calendar
          onChange={(newValue) => setValue(newValue as Value)}
          value={value}
          locale="pt-BR"
          selectRange
        />
      </div>

      <div className="mt-4">
        <p>
          Data selecionada:{" "}
          <strong>
            {Array.isArray(value)
              ? `${value[0]?.toLocaleDateString()} até ${value[1]?.toLocaleDateString()}`
              : value?.toLocaleDateString()}
          </strong>
        </p>
      </div>
    </div>
  );
};

export default TempoLivre;
