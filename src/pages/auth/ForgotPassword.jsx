// import { Link, useNavigate } from 'react-router-dom'; // 1. Ajoute useNavigate

// const ForgotPassword = () => {
//   const navigate = useNavigate(); // 2. Initialise le hook de navigation

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // 3. Ici on simule l'envoi. Quand l'utilisateur clique, on l'envoie vers le reset.
//     navigate('/reset-password'); 
//   };

//   return (
//     <div 
//       className="fixed inset-0 w-full h-full overflow-hidden flex items-center justify-center p-4"
//       style={{
//         backgroundImage: `linear-gradient(rgba(69, 72, 77, 0.85), rgba(69, 72, 77, 0.85)), url('/bg-auth.jpg')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat'
//       }}
//     >
      
//       {/* Section Logo */}
//       <div className="flex flex-col items-center z-10">
//         <div className="flex items-center gap-3 mb-8 text-white">
//           <img 
//             src="/logo.png" 
//             alt="Logo Red Product" 
//             className="w-10 h-10 object-contain" 
//           />
//           <h1 className="text-xl font-bold tracking-tight uppercase">Red Product</h1>
//         </div>

//         {/* Carte du Formulaire */}
//         <div className="bg-white w-[384px] rounded-sm shadow-2xl p-8">
//           <h1 className="text-black text-lg font-bold mb-2">Mot de passe oublié ?</h1>
//           <p className="text-gray-500 text-sm mb-10">
//             Entrez votre adresse e-mail ci-dessous et nous vous envoyons des instructions sur la façon de modifier votre mot de passe.
//           </p>
          
//           {/* 4. Ajoute le onSubmit ici */}
//           <form onSubmit={handleSubmit} className="space-y-8 text-left">
//             <div className="border-b border-gray-200">
//               <input 
//                 required
//                 type="email" 
//                 placeholder="Votre e-mail" 
//                 className="w-full py-2 outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent" 
//               />
//             </div>

//             <button 
//               type="submit"
//               className="w-full bg-[#45484D] text-white py-3 rounded-sm font-medium hover:bg-black transition-all shadow-md"
//             >
//               Envoyer 
//             </button>
//           </form>

//           <div className="mt-8 text-center text-sm text-gray-600">
//             Retour à la 
//             <Link to="/login" className="text-[#FFC107] font-bold ml-1 hover:underline">
//               connexion
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;

import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => { e.preventDefault(); navigate('/reset-password'); };

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
            <h1 className="text-black text-base font-bold mb-1">Mot de passe oublié ?</h1>
            <p className="text-gray-500 text-[10px] mb-8 leading-relaxed font-medium">
              Entrez votre adresse e-mail ci-dessous et nous vous envoyons des instructions sur la façon de modifier votre mot de passe.
            </p>
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="border-b border-gray-200 pb-1">
                <input required type="email" placeholder="Votre e-mail" className="w-full outline-none text-sm text-gray-700 bg-transparent" />
              </div>
            </form>
          </div>
          <button type="submit" onClick={handleSubmit} className="w-full bg-[#45484D] text-white py-3 rounded-sm font-bold text-sm shadow-md">
            Envoyer
          </button>
        </div>

        <div className="mt-6">
          <p className="text-[12px] text-white">Retour à la <Link to="/login" className="text-[#FFC107] font-bold ml-1">connexion</Link></p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;