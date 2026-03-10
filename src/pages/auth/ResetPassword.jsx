import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    // Redirection vers la connexion après mise à jour
    navigate('/login'); 
  };

  return (
    <div className="fixed inset-0 w-full h-[100dvh] overflow-hidden flex items-center justify-center p-4">
      
      {/* Fond avec overlay */}
      <div 
        className="absolute inset-0 w-full h-full -z-10"
        style={{
        backgroundImage: `url('/bg-auth.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      <div className="flex flex-col items-center z-10">
        
        {/* Logo */}
        <div className="flex items-center gap-2 mb-4 text-white">
          <img src="/logo.png" alt="Logo" className="w-7 h-7 object-contain" />
          <h1 className="text-lg font-bold uppercase italic">Red Product</h1>
        </div>

        {/* Carte Ultra-Compacte */}
        <div 
          className="bg-white rounded-sm shadow-2xl p-5 flex flex-col justify-between"
          style={{ width: '310px', height: '340px' }} 
        >
          <div>
            <h2 className="text-gray-800 text-base font-bold mb-1">Réinitialisation</h2>
            <p className="text-gray-500 text-[10px] mb-8 font-medium leading-relaxed">
              Veuillez définir votre nouveau mot de passe pour sécuriser votre compte.
            </p>
            
            <form onSubmit={handleUpdate} className="space-y-6">
              <div className="border-b border-gray-200 pb-1">
                <input 
                  required
                  type="password" 
                  placeholder="Nouveau mot de passe" 
                  className="w-full outline-none text-sm text-gray-700 bg-transparent" 
                />
              </div>

              <div className="border-b border-gray-200 pb-1">
                <input 
                  required
                  type="password" 
                  placeholder="Confirmer le mot de passe" 
                  className="w-full outline-none text-sm text-gray-700 bg-transparent" 
                />
              </div>
            </form>
          </div>

          {/* Bouton bien remonté */}
          <button 
            type="submit"
            onClick={handleUpdate}
            className="w-full bg-[#45484D] text-white py-3 rounded-sm font-bold text-sm shadow-md mt-4 hover:bg-black transition-all"
          >
            Mettre à jour
          </button>
        </div>

      </div>
    </div>
  );
};

export default ResetPassword;