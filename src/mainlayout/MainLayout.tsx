import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Sidebar from '../components/sidebar/Sidebar';



const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex bg-gray-100 min-h-screen">
        <Sidebar />
        <div className="flex-grow flex flex-col">
          {/* As rotas filhas (Dashboard, Funcionarios, etc.) serão renderizadas aqui */}
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;

