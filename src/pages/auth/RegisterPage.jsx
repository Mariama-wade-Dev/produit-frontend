// import { Link } from 'react-router-dom';

// const RegisterPage = () => {
//   return (
//     <div 
//       className="min-h-screen flex flex-col items-center justify-center p-4 relative"
//       style={{
//         backgroundImage: `linear-gradient(rgba(69, 72, 77, 0.85), rgba(69, 72, 77, 0.85)), url('/bg-auth.jpg')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat'
//       }}
//     >
      
//       {/* Section Logo */}
//       <div className="flex items-center gap-3 mb-8 text-white z-10">
//         <img 
//           src="/logo.png" 
//           alt="Logo Red Product" 
//           className="w-10 h-10 object-contain" 
//         />
//         <h1 className="text-xl font-bold tracking-tight uppercase">Red Product</h1>
//       </div>

//       {/* Carte du Formulaire */}
// <div className="bg-white w-[384px] rounded-sm shadow-2xl p-8 z-10">
//         <p className="text-gray-700 text-sm mb-10 font-medium">Inscrivez-vous en tant que Admin</p>
        
//         <form className="space-y-6">
//           {/* Nom d'utilisateur */}
//           <div className="border-b border-gray-200">
//             <input 
//               type="text" 
//               placeholder="Nom " 
//               className="w-full py-2 outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent" 
//             />
//           </div>

//           {/* E-mail */}
//           <div className="border-b border-gray-200">
//             <input 
//               type="email" 
//               placeholder="E-mail" 
//               className="w-full py-2 outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent" 
//             />
//           </div>

//           {/* Mot de passe */}
//           <div className="border-b border-gray-200">
//             <input 
//               type="password" 
//               placeholder="Mot de passe" 
//               className="w-full py-2 outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent" 
//             />
//           </div>

//           {/* Checkbox Conditions */}
//           <div className="flex items-center gap-2 pt-2">
//             <input 
//               type="checkbox" 
//               id="terms" 
//               className="w-4 h-4 accent-[#45484D] cursor-pointer" 
//             />
//             <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer select-none font-medium">
//               Accepter les termes et la politique
//             </label>
//           </div>

//           {/* Bouton Inscription */}
//           <button 
//             type="submit"
//             className="w-full bg-[#45484D] text-white py-3 rounded-sm font-medium hover:bg-black transition-all shadow-md"
//           >
//             S'inscrire
//           </button>
//         </form>
//       </div>

//       {/* Lien vers Connexion */}
//       <div className="mt-6 text-center z-10">
//         <p className="text-sm text-white">
//           Vous avez déjà un compte ?
//           <Link to="/login" className="text-[#FFC107] font-bold ml-1 ">
//             Se connecter
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;
// // import { Link } from 'react-router-dom';

// // const RegisterPage = () => {
// //   return (
// //     /* On bloque tout le viewport pour éviter les scrolls bizarres */
// //     <div className="fixed inset-0 w-full h-full overflow-hidden flex items-center justify-center p-4">
      
// //       {/* 1. FOND FIXE DÉTACHÉ */}
// //       <div 
// //         className="absolute inset-0 w-full h-full -z-10"
// //         style={{
// //           backgroundImage: `linear-gradient(rgba(69, 72, 77, 0.85), rgba(69, 72, 77, 0.85)), url('/bg-auth.jpg')`,
// //           backgroundSize: 'cover',
// //           backgroundPosition: 'center',
// //           backgroundRepeat: 'no-repeat',
// //         }}
// //       />

// //       {/* 2. LE CONTENU (Logo + Carte + Lien) */}
// //       <div className="flex flex-col items-center z-10">
        
// //         {/* Section Logo */}
// //         <div className="flex items-center gap-3 mb-6 text-white">
// //           <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
// //           <h1 className="text-xl font-bold uppercase italic tracking-tight">Red Product</h1>
// //         </div>

// //         {/* --- LA CARTE : DIMENSIONS EXACTES FIGMA --- */}
// //         <div 
// //           className="bg-white rounded-sm shadow-2xl p-8 flex flex-col"
// //           style={{ width: '384px', height: '649.59px' }} 
// //         >
// //           <p className="text-gray-700 text-sm mb-10 font-medium">Inscrivez-vous en tant que Admin</p>
          
// //           <form className="flex-grow flex flex-col justify-between">
// //             {/* Groupe de champs */}
// //             <div className="space-y-10">
// //               <div className="border-b border-gray-100 pb-2">
// //                 <input 
// //                   type="text" 
// //                   placeholder="Nom" 
// //                   className="w-full outline-none text-base text-gray-700 placeholder-gray-300 bg-transparent" 
// //                 />
// //               </div>

// //               <div className="border-b border-gray-100 pb-2">
// //                 <input 
// //                   type="email" 
// //                   placeholder="E-mail" 
// //                   className="w-full outline-none text-base text-gray-700 placeholder-gray-300 bg-transparent" 
// //                 />
// //               </div>

// //               <div className="border-b border-gray-100 pb-2">
// //                 <input 
// //                   type="password" 
// //                   placeholder="Mot de passe" 
// //                   className="w-full outline-none text-base text-gray-700 placeholder-gray-300 bg-transparent" 
// //                 />
// //               </div>

// //               <div className="flex items-start gap-3 pt-2">
// //                 <input 
// //                   type="checkbox" 
// //                   id="terms" 
// //                   className="mt-1 w-4 h-4 accent-[#45484D] cursor-pointer" 
// //                 />
// //                 <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer leading-tight">
// //                   Accepter les termes et la politique
// //                 </label>
// //               </div>
// //             </div>

// //             {/* Bouton ancré en bas de la carte */}
// //             <button 
// //               type="submit" 
// //               className="w-full bg-[#45484D] text-white py-3 rounded-sm font-bold text-lg hover:bg-black transition-all"
// //             >
// //               S'inscrire
// //             </button>
// //           </form>
// //         </div>

// //         {/* 3. LIEN EN DESSOUS (Hors de la carte) */}
// //         <div className="mt-6 text-center text-white text-sm">
// //           Vous avez déjà un compte ? 
// //           <Link to="/login" className="text-[#FFC107] font-bold ml-1 hover:underline">
// //             Se connecter
// //           </Link>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // };

// // export default RegisterPage;
import { Link } from 'react-router-dom';

const RegisterPage = () => {
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
            <p className="text-gray-700 text-[13px] mb-4 font-medium">Inscrivez-vous en tant que Admin</p>
            <form className="space-y-3.5">
              <div className="border-b border-gray-200 pb-0.5">
                <input type="text" placeholder="Nom" className="w-full outline-none text-sm text-gray-700 bg-transparent" />
              </div>
              <div className="border-b border-gray-200 pb-0.5">
                <input type="email" placeholder="E-mail" className="w-full outline-none text-sm text-gray-700 bg-transparent" />
              </div>
              <div className="border-b border-gray-200 pb-0.5">
                <input type="password" placeholder="Mot de passe" className="w-full outline-none text-sm text-gray-700 bg-transparent" />
              </div>
              <div className="flex items-start gap-2 pt-1">
                <input type="checkbox" id="terms" className="mt-0.5 w-3.5 h-3.5 accent-[#45484D]" />
                <label htmlFor="terms" className="text-[10px] text-gray-600 leading-tight font-medium">Accepter les termes et la politique</label>
              </div>
            </form>
          </div>
          <button type="submit" className="w-full bg-[#45484D] text-white py-2.5 rounded-sm font-bold text-sm shadow-md">
            S'inscrire
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-[12px] text-white">Vous avez déjà un compte ? <Link to="/login" className="text-[#FFC107] font-bold ml-1">Se connecter</Link></p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;