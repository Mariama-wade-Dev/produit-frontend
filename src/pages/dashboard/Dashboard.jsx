import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useHotels } from '../../context/HotelContext';


import { 
  FaChartPie, 
  FaHotel, 
  FaBell, 
  FaSearch, 
  FaSignOutAlt,
  FaFileAlt, 
  FaEnvelope, 
  FaUsers, 
  FaProjectDiagram 
} from 'react-icons/fa';

const Dashboard = () => {
  const navigate = useNavigate();
   const { hotels } = useHotels();

  // Données des cartes
  const stats = [
    { label: 'Formulaires', value: '125', sub: 'Je ne sais pas quoi mettre', icon: <FaFileAlt />, color: 'bg-purple-600' },
    { label: 'Messages', value: '40', sub: 'Je ne sais pas quoi mettre', icon: <FaEnvelope />, color: 'bg-teal-500' },
    { label: 'Utilisateurs', value: '600', sub: 'Je ne sais pas quoi mettre', icon: <FaUsers />, color: 'bg-yellow-500' },
    { label: 'E-mails', value: '25', sub: 'Je ne sais pas quoi mettre', icon: <FaEnvelope />, color: 'bg-red-500' },
    { 
 
  label: 'Hôtels', 
  value: hotels.length, // Utilise la longueur réelle du tableau
  sub: 'Je ne sais pas quoi mettre', 
  icon: <FaHotel />, 
  color: 'bg-purple-800' 
},
    { label: 'Entités', value: '02', sub: 'Je ne sais pas quoi mettre', icon: <FaProjectDiagram />, color: 'bg-blue-600' },
  ];

  return (
    <div className="flex h-screen w-full overflow-hidden">
      
      {/* --- SIDEBAR --- */}
      <aside 
        className="w-64 text-white flex flex-col shrink-0"
        style={{
          backgroundImage: `url('/bg-sidebar.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="p-6 flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-6 h-6 object-contain" />
          <span className="font-bold text-lg tracking-tight uppercase italic text-white">Red Product</span>
        </div>

        <div className="mt-2">
          <p className="px-6 py-4 text-[10px] text-gray-400 uppercase font-bold tracking-widest">Principal</p>
          <div className="bg-white text-gray-800 py-3 px-6 flex items-center gap-4 cursor-pointer">
            <FaChartPie className="text-lg" />
            <span className="font-bold text-sm">Dashboard</span>
          </div>
          <div 
            onClick={() => navigate('/hotels')}
            className="px-6 py-4 flex items-center gap-4 text-white/90 hover:bg-white/10 cursor-pointer transition-all"
          >
            <FaHotel className="text-lg" />
            <span className="text-sm font-medium">Liste des hôtels</span>
          </div>
        </div>

        <div className="mt-auto p-6 border-t border-white/10 flex items-center gap-3">
          <img src="/avatar.jpg" alt="User" className="w-10 h-10 rounded-full object-cover" />
          <div>
            <p className="text-xs font-bold text-white">Mouhamadou Mp</p>
            <div className="flex items-center gap-1">
               <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
               <p className="text-[10px] text-gray-300 font-light">En ligne</p>
            </div>
          </div>
        </div>
      </aside>

      {/* --- CONTENU PRINCIPAL --- */}
      <main 
        className="flex-1 flex flex-col overflow-hidden"
        style={{
          backgroundImage: `url('/bg-white.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Header */}
        <header className="h-16 bg-white border-b px-8 flex items-center justify-between shadow-sm z-10">
          <h2 className="text-lg font-bold text-gray-700">Dashboard</h2>
          <div className="flex items-center gap-6">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 text-sm" />
              <input type="text" placeholder="Recherche" className="pl-10 pr-4 py-1.5 border border-gray-200 rounded-lg text-sm outline-none w-64" />
            </div>
            <div className="flex items-center gap-4 text-gray-400 border-l pl-6">
              <div className="relative cursor-pointer"><FaBell size={20} /><span className="absolute -top-1 -right-1 bg-yellow-400 text-[9px] text-white w-4 h-4 rounded-md flex items-center justify-center font-bold">3</span></div>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 cursor-pointer">
                <img src="https://i.pravatar.cc/150?u=user1" alt="Profil" />
              </div>
              <FaSignOutAlt className="cursor-pointer hover:text-red-500" onClick={() => navigate('/login')} />
            </div>
          </div>
        </header>

        {/* Zone des Cartes */}
        <div className="flex-1 overflow-y-auto p-8 bg-transparent">
           <div className="mb-10 pb-6">
              <h3 className="text-2xl font-light text-gray-600 tracking-tight uppercase">Bienvenue sur RED Product</h3>
              <p className="text-gray-400 text-sm mt-1 italic">Gérez vos activités en toute simplicité.</p>
           </div>
           
           {/* Grille des cartes */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-5 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className={`${stat.color} w-12 h-12 rounded-full flex items-center justify-center text-white text-xl shrink-0`}>
                  {stat.icon}
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-gray-800">{stat.value}</span>
                    <span className="text-sm text-gray-500">{stat.label}</span>
                  </div>
                  <p className="text-[11px] text-gray-400 mt-1">{stat.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;