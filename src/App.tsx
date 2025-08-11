import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormDepartamento from "./components/departamento/formdepartamento/formDepartamentos";
import ListaDepartamentos from "./components/departamento/listadepartamento/ListaDepartamento";
import DeletarFuncionario from "./components/funcionario/deletarfuncionario/DeletarFuncionario";
import FormFuncionario from "./components/funcionario/formfuncionario/FormFuncionario";
import ListaFuncionarios from "./components/funcionario/listafuncionario/listaFuncionario";
import MainLayout from "./mainlayout/MainLayout";
import Configuracoes from "./pages/Configuracoes";
import Dashboard from "./pages/Dashboard";
import Funcionarios from "./pages/Funcionarios";
import Cadastro from "./pages/cadastro/Cadastro";
import Login from "./pages/login/Login";
import DeletarDepartamento from "./components/departamento/deletardepartamento/deletarDepartamento";
import TempoLivre from "./pages/TempoLivre";
import Performance from "./pages/Performance";

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
            <Route path="/departamentos" element={<FormDepartamento />} />
            <Route path="/departamentoslista" element={<ListaDepartamentos />} />
            <Route path="/cadastrardepartamento" element={<FormDepartamento />} />
            <Route path="/deletardepartamento/:id" element={<DeletarDepartamento />}/>
            <Route path="/editardepartamento/:id" element={<FormDepartamento />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/configuracoes" element={<Configuracoes />} />
            <Route path="/funcionarioslista" element={<ListaFuncionarios />} />
            <Route path="/cadastrarfuncionario" element={<FormFuncionario />} />
            <Route path="/deletarfuncionario/:id" element={<DeletarFuncionario />}/>
            <Route path="/editarfuncionario/:id" element={<FormFuncionario />}/>
            <Route path="/tempolivre" element={<TempoLivre />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;