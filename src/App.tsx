import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
// import Dashboard from "./pages/Dashboard";

// 1. Importe os componentes das novas páginas
import Funcionarios from "./pages/Funcionarios";
import Recrutamento from "./pages/Recrutamento";
import Performance from "./pages/Performance";
// import TempoLivre from "./pages/TempoLivre";
import Configuracoes from "./pages/Configuracoes";
import Home from "./pages/home/Home";
import Cadastro from "./pages/cadastro/Cadastro";
import ListaFuncionarios from "./components/funcionario/listafuncionario/listaFuncionario";
import Login from "./pages/login/Login";
import FormFuncionario from "./components/funcionario/formfuncionario/FormFuncionario";
import DeletarFuncionario from "./components/funcionario/deletarfuncionario/DeletarFuncionario";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <div className="flex bg-gray-100 min-h-screen">
        <Sidebar />
        <div className="flex-grow flex flex-col">
          <Routes>
            {/* 2. Adicione uma rota para cada link da sua Sidebar */}
            <Route path="/" element={<Login />} />
            <Route path="/funcionarios" element={<Funcionarios />} />
            <Route path="/recrutamento" element={<Recrutamento />} />
            <Route path="/performance" element={<Performance />} />
            {/* <Route path="/tempolivre" element={<TempoLivre />} /> */}
            <Route path="/configuracoes" element={<Configuracoes />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/funcionarioslista" element={<ListaFuncionarios />} />
            <Route path="/cadastrarfuncionario" element={<FormFuncionario />} />
            <Route path="/editar/:id" element={<FormFuncionario />} />
            <Route path="/deletarfuncionario/:id" element={<DeletarFuncionario />} />
          </Routes>
          
        </div>
      </div>
      <Footer />
    </BrowserRouter>
    </>
  );
};
export default App;