import React from 'react';
import { FaSearch, FaBell, FaSignOutAlt, FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ title, toggleSidebar }) => {
  const navigate = useNavigate();

  return (
    <header className="h-16 bg-white border-b px-4 md:px-8 flex items-center justify-between shadow-sm z-10 shrink-0">
      
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar} 
          className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
        >
          <FaBars size={20} />
        </button>
        
        <h2 className="text-lg font-bold text-gray-700 truncate">{title}</h2>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        <div className="relative hidden sm:block">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 text-sm" />
          <input 
            type="text" 
            placeholder="Recherche" 
            className="pl-10 pr-4 py-1.5 border border-gray-200 rounded-lg text-sm outline-none w-40 lg:w-64 focus:border-gray-400 transition-all" 
          />
        </div>

        <div className="flex items-center gap-3 md:gap-4 text-gray-400 border-l pl-4 md:pl-6">
          <div className="relative cursor-pointer hover:text-gray-600 transition-colors">
            <FaBell size={20} />
            <span className="absolute -top-1 -right-1 bg-yellow-400 text-[9px] text-white w-4 h-4 rounded flex items-center justify-center font-bold">3</span>
          </div>
          
          <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 cursor-pointer">
            <img src="https://i.pravatar.cc/150?u=user1" alt="Profil" />
          </div>

          <button 
            onClick={() => navigate('/')} 
            className="hover:text-red-500 transition-colors"
            title="Déconnexion"
          >
            <FaSignOutAlt size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;