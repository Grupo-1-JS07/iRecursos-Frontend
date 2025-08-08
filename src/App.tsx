import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import ListaFuncionarios from './components/funcionario/listafuncionario/listaFuncionario'
import FormFuncionario from './components/funcionario/formfuncionario/FormFuncionario'
import DeletarFuncionario from './components/funcionario/deletarfuncionario/DeletarFuncionario'

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<FormFuncionario />} />
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/funcionarios" element={<ListaFuncionarios />} />
            <Route path="/cadastro" element={<FormFuncionario />} />
            <Route path="/editar/:id" element={<FormFuncionario />} />
            <Route path="/deletarfuncionario/:id" element={<DeletarFuncionario />} />
         </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App