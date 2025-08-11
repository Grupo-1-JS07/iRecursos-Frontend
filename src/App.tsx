import React from "react";
import Funcionarios from "./pages/Funcionarios";
import Recrutamento from "./pages/Recrutamento";
import Performance from "./pages/Performance";
import Configuracoes from "./pages/Configuracoes";
import Dashboard from "./pages/Dashboard";
import Cadastro from "./pages/cadastro/Cadastro";
import Login from "./pages/login/Login";
import ListaFuncionarios from "./components/funcionario/listafuncionario/listaFuncionario";
import FormFuncionario from "./components/funcionario/formfuncionario/FormFuncionario";
import DeletarFuncionario from "./components/funcionario/deletarfuncionario/DeletarFuncionario";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./mainlayout/MainLayout";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* 2. Rotas Públicas (sem layout principal) */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />

          {/* 3. Rotas Privadas (com layout principal) */}
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/funcionarios" element={<Funcionarios />} />
            <Route path="/recrutamento" element={<Recrutamento />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/configuracoes" element={<Configuracoes />} />
            <Route path="/funcionarioslista" element={<ListaFuncionarios />} />
            <Route path="/cadastrarfuncionario" element={<FormFuncionario />} />
            <Route
              path="/cadastrarfuncionario/{}"
              element={<FormFuncionario />}
            />
            <Route path="/editar/:id" element={<FormFuncionario />} />
            <Route
              path="/deletarfuncionario/:id"
              element={<DeletarFuncionario />}
            />
            <Route
              path="/editarfuncionario/:id"
              element={<FormFuncionario />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
