// import { Link } from 'react-router-dom';

// const LoginPage = () => {
//   return (
//     <div 
//       className="min-h-screen flex flex-col items-center justify-center p-4 relative"
//       style={{
//         // On applique ton image jpg avec un léger voile sombre pour la lisibilité
//         backgroundImage: `linear-gradient(rgba(69, 72, 77, 0.85), rgba(69, 72, 77, 0.85)), url('/bg-auth.jpg')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat'
//       }}
//     >
      
//       {/* Section Logo avec ton image */}
//       <div className="flex items-center gap-3 mb-8 text-white z-10">
//         <img 
//           src="/logo.png" 
//           alt="Logo Red Product" 
//           className="w-10 h-10 object-contain" 
//         />
//         <h1 className="text-xl font-bold tracking-tight uppercase">Red Product</h1>
//       </div>

//       {/* Carte du Formulaire (Même rendu que ton image Figma) */}
//       <div className="bg-white w-[384px] rounded-sm shadow-2xl p-8 z-10">
//         <p className="text-gray-700 text-sm mb-10 font-medium">Connectez-vous en tant que Admin</p>
        
//         <form className="space-y-8">
//           {/* Champ E-mail style "Underline" */}
//           <div className="border-b border-gray-200">
//             <input 
//               type="email" 
//               placeholder="E-mail" 
//               className="w-full py-2 outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent" 
//             />
//           </div>

//           {/* Champ Mot de passe style "Underline" */}
//           <div className="border-b border-gray-200">
//             <input 
//               type="password" 
//               placeholder="Mot de passe" 
//               className="w-full py-2 outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent" 
//             />
//           </div>

//           {/* Checkbox */}
//           <div className="flex items-center gap-2 pt-2">
//             <input 
//               type="checkbox" 
//               id="keep" 
//               className="w-4 h-4 accent-[#45484D] cursor-pointer" 
//             />
//             <label htmlFor="keep" className="text-sm text-gray-600 cursor-pointer select-none font-medium">
//               Gardez-moi connecté
//             </label>
//           </div>

//           {/* Bouton Gris Sombre */}
//           <button 
//             type="submit"
//             className="w-full bg-[#45484D] text-white py-3 rounded-sm font-medium hover:bg-black transition-all shadow-md"
//           >
//             Se connecter
//           </button>
//         </form>
//       </div>

//       {/* Liens en Jaune/Doré (#FFC107 pour un meilleur contraste) */}
//       <div className="mt-6 text-center space-y-3 z-10">
//         <Link 
//           to="/forgot-password" 
//           className="block text-[#FFC107] text-sm font-bold "
//         >
//           Mot de passe oublié ?
//         </Link>
//         <p className="text-sm text-white">
//           Vous n'avez pas de compte ? 
//           <Link to="/register" className="text-[#FFC107] font-bold ml-1 ">
//             S'inscrire
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="fixed inset-0 w-full h-[100dvh] overflow-hidden flex items-center justify-center p-4">
      <div className="absolute inset-0 w-full h-full -z-10"
        style={{
          backgroundImage: `url('/bg-auth.png')`,
          backgroundSize: 'cover', backgroundPosition: 'center'
        }}
      />
      <div className="flex flex-col items-center z-10">
        <div className="flex items-center gap-2 mb-4 text-white">
          <img src="/logo.png" alt="Logo" className="w-7 h-7 object-contain" />
          <h1 className="text-lg font-bold uppercase italic">Red Product</h1>
        </div>

        <div className="bg-white rounded-sm shadow-2xl p-5 flex flex-col justify-between"
          style={{ width: '310px', height: '340px' }}>
          <div>
            <p className="text-gray-700 text-[13px] mb-6 font-medium">Connectez-vous en tant que Admin</p>
            <form className="space-y-6">
              <div className="border-b border-gray-200 pb-1">
                <input type="email" placeholder="E-mail" className="w-full outline-none text-sm text-gray-700 bg-transparent" />
              </div>
              <div className="border-b border-gray-200 pb-1">
                <input type="password" placeholder="Mot de passe" className="w-full outline-none text-sm text-gray-700 bg-transparent" />
              </div>
              <div className="flex items-center gap-2 pt-1">
                <input type="checkbox" id="keep" className="w-3.5 h-3.5 accent-[#45484D]" />
                <label htmlFor="keep" className="text-[11px] text-gray-600 cursor-pointer font-medium">Gardez-moi connecté</label>
              </div>
            </form>
          </div>
          <button type="submit" className="w-full bg-[#45484D] text-white py-3 rounded-sm font-bold text-sm shadow-md">
            Se connecter
          </button>
        </div>

        <div className="mt-4 text-center space-y-1">
          <Link to="/forgot-password" size="small" className="block text-[#FFC107] text-[12px] font-bold">Mot de passe oublié ?</Link>
          <p className="text-[12px] text-white">Vous n'avez pas de compte ? <Link to="/register" className="text-[#FFC107] font-bold ml-1">S'inscrire</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;