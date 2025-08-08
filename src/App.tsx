import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import Dashboard from "./pages/Dashboard";

// 1. Importe os componentes das novas páginas
import Funcionarios from "./pages/Funcionarios";
import Recrutamento from "./pages/Recrutamento";
import Performance from "./pages/Performance";
import TempoLivre from "./pages/TempoLivre";
import Configuracoes from "./pages/Configuracoes";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex bg-gray-100 min-h-screen">
        <Sidebar />
        <div className="flex-grow flex flex-col">
          <Routes>
            {/* 2. Adicione uma rota para cada link da sua Sidebar */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/funcionarios" element={<Funcionarios />} />
            <Route path="/recrutamento" element={<Recrutamento />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/tempolivre" element={<TempoLivre />} />
            <Route path="/configuracoes" element={<Configuracoes />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
