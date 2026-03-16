// import React from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { FaChartPie, FaHotel } from 'react-icons/fa';

// const Sidebar = ({ hotelsCount, isOpen }) => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Fonction pour vérifier si l'onglet est actif
//   const isActive = (path) => location.pathname === path;

//   return (
//     <aside 
//       className={`fixed md:relative w-64 h-screen text-white flex flex-col shrink-0 shadow-2xl z-40 
//       transition-transform duration-300 ease-in-out overflow-hidden
//       ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
//     >
//       {/* Image de fond avec overlay sombre */}
//       <div 
//         className="absolute inset-0 z-0"
//         style={{ 
//           backgroundImage: "url('/bg-sidebar.png')", 
//           backgroundSize: 'cover', 
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat'
//         }}
//       />
      
//       {/* Overlay pour assombrir l'image et rendre le texte lisible */}
//       <div className="absolute inset-0 bg-black/40 z-0" />

//       {/* Contenu de la Sidebar */}
//       <div className="relative z-10 flex flex-col h-full">
        
//         {/* Header : Logo + Titre */}
//         <div className="p-6 flex items-center gap-2 shrink-0">
//           <img src="/logo.png" alt="Logo" className="w-6 h-6 object-contain" />
//           <span className="font-bold text-lg tracking-tight uppercase italic text-white">
//             Red Product
//           </span>
//         </div>

//         {/* Navigation */}
//         <nav className="mt-2 flex-1 overflow-y-auto custom-scrollbar">
//           <p className="px-6 py-4 text-[10px] text-white/50 uppercase font-bold tracking-widest">
//             Principal
//           </p>
          
//           {/* Dashboard */}
//           <div 
//             onClick={() => navigate('/dashboard')} 
//             className={`px-6 py-4 flex items-center gap-4 cursor-pointer transition-all 
//             ${isActive('/dashboard') 
//               ? 'bg-white text-gray-800' 
//               : 'text-white/90 hover:bg-white/10'}`}
//           >
//             <FaChartPie className="text-lg" />
//             <span className="text-sm font-medium">Dashboard</span>
//           </div>

//           {/* Liste des hôtels */}
//           <div 
//             onClick={() => navigate('/hotels')}
//             className={`px-6 py-4 flex items-center gap-4 cursor-pointer transition-all 
//             ${isActive('/hotels') 
//               ? 'bg-white text-gray-800 shadow-md' 
//               : 'text-white/90 hover:bg-white/10'}`}
//           >
//             <FaHotel className="text-lg" />
//             <span className="text-sm font-bold">
//               Liste des hôtels ({hotelsCount || 0})
//             </span>
//           </div>
//         </nav>

//         Footer : Profil Utilisateur
//         <div className="mt-auto p-6 border-t border-white/10 flex items-center gap-3 shrink-0 bg-black/20">
//           <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-400">
//             <img 
//               src="https://i.pravatar.cc/150?u=user1" 
//               alt="Profil" 
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div className="overflow-hidden">
//             <p className="text-xs font-bold text-white truncate">Mouhamadou ba</p>
//             <div className="flex items-center gap-1">
//               <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
//               <p className="text-[10px] text-gray-300 font-light italic">En ligne</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;






import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaChartPie, FaHotel } from 'react-icons/fa';

const Sidebar = ({ hotelsCount, isOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const username = localStorage.getItem('username') || "Utilisateur";

  return (
    <aside 
      className={`fixed md:relative w-64 h-screen text-white flex flex-col shrink-0 shadow-2xl z-40 
      transition-transform duration-300 ease-in-out overflow-hidden
      ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
    >
      {/* Image de fond */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: "url('/bg-sidebar.png')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="absolute inset-0 bg-black/40 z-0" />

      <div className="relative z-10 flex flex-col h-full">
        
        {/* Header */}
        <div className="p-6 flex items-center gap-2 shrink-0">
          <img src="/logo.png" alt="Logo" className="w-6 h-6 object-contain" />
          <span className="font-bold text-lg tracking-tight uppercase italic text-white">
            Red Product
          </span>
        </div>

        {/* Navigation */}
        <nav className="mt-2 flex-1 overflow-y-auto custom-scrollbar">
          <p className="px-6 py-4 text-[10px] text-white/50 uppercase font-bold tracking-widest">
            Principal
          </p>
          
          <div 
            onClick={() => navigate('/dashboard')} 
            className={`px-6 py-4 flex items-center gap-4 cursor-pointer transition-all 
            ${isActive('/dashboard') 
              ? 'bg-white text-gray-800' 
              : 'text-white/90 hover:bg-white/10'}`}
          >
            <FaChartPie className="text-lg" />
            <span className="text-sm font-medium">Dashboard</span>
          </div>

          <div 
            onClick={() => navigate('/hotels')}
            className={`px-6 py-4 flex items-center gap-4 cursor-pointer transition-all 
            ${isActive('/hotels') 
              ? 'bg-white text-gray-800 shadow-md' 
              : 'text-white/90 hover:bg-white/10'}`}
          >
            <FaHotel className="text-lg" />
            <span className="text-sm font-bold">
              Liste des hôtels ({hotelsCount || 0})
            </span>
          </div>
        </nav>

        {/* FOOTER NETTOYÉ : Pas de barre (border-t), pas de bouton logout */}
        <div className="mt-auto p-6 flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 shrink-0">
            <img 
              src={`https://ui-avatars.com/api/?name=${username}&background=random&color=fff`} 
              alt="Profil" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold text-white truncate">{username}</p>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <p className="text-[10px] text-gray-300 font-light italic">En ligne</p>
            </div>
          </div>
        </div>

      </div>
    </aside>
  );
};

export default Sidebar;