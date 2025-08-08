import React from 'react';
import { Calendar, GearSix, ListDashes, UserPlus, Users, House } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="w-16 bg-white shadow-lg p-4 flex flex-col items-center">
      <nav>
        <ul>
          <li className="mb-2"> {/* Dashboard */}
            <Link to="/" className="flex items-center justify-center w-12 h-12 text-gray-600 hover:bg-blue-500 hover:text-white rounded-md transition-colors duration-200"> {/* Home */}
              <House size={24} />
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/funcionarios" className="flex items-center justify-center w-12 h-12 text-gray-600 hover:bg-blue-500 hover:text-white rounded-md transition-colors duration-200">
              <Users size={24} />
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/recrutamento" className="flex items-center justify-center w-12 h-12 text-gray-600 hover:bg-blue-500 hover:text-white rounded-md transition-colors duration-200">
              <UserPlus size={24} />
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/performance" className="flex items-center justify-center w-12 h-12 text-gray-600 hover:bg-blue-500 hover:text-white rounded-md transition-colors duration-200">
              <ListDashes size={24} />
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/tempolivre" className="flex items-center justify-center w-12 h-12 text-gray-600 hover:bg-blue-500 hover:text-white rounded-md transition-colors duration-200">
              <Calendar size={24} />
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/configuracoes" className="flex items-center justify-center w-12 h-12 text-gray-600 hover:bg-blue-500 hover:text-white rounded-md transition-colors duration-200">
              <GearSix size={24} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;