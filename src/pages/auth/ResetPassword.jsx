import { useNavigate } from 'react-router-dom';
import AuthHeader from '../../components/common/AuthHeader';
import { useAuth } from '../../hooks/useAuth';

const ResetPassword = () => {
  // On récupère les éléments nécessaires depuis useAuth
  const { password, setPassword, reset, isResetLoading } = useAuth();

  return (
    <div className="fixed inset-0 w-full h-[100dvh] flex items-center justify-center p-4 overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url('/bg-auth.png')` }}
      />

      <div className="flex flex-col items-center z-10">
        <AuthHeader
          logo="/logo.png"
          title="Red Product"
        />

        <div className="bg-white rounded-sm shadow-2xl flex flex-col justify-between p-6 w-[260px] min-h-[290px]">
          <div className="flex flex-col justify-center h-full space-y-4">
            <h2 className="text-gray-800 text-base font-bold text-center">
              Réinitialisation
            </h2>
            <p className="text-gray-500 text-[10px] font-medium leading-relaxed text-center">
              Veuillez définir votre nouveau mot de passe pour sécuriser votre compte.
            </p>

            <form onSubmit={reset} className="flex flex-col space-y-4">
              <input
                type="password"
                required
                placeholder="Nouveau mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b border-gray-200 pb-1 text-sm text-gray-700 bg-transparent outline-none placeholder-gray-400"
              />
              <input
                type="password"
                required
                placeholder="Confirmer le mot de passe"
                className="w-full border-b border-gray-200 pb-1 text-sm text-gray-700 bg-transparent outline-none placeholder-gray-400"
              />
              
              {/* Le bouton est maintenant dans le formulaire pour supporter la touche Entrée */}
              <button
                type="submit"
                disabled={isResetLoading}
                className="w-full bg-[#45484D] text-white py-3 rounded-sm font-bold text-sm shadow-md hover:bg-black transition-all mt-6 disabled:opacity-50"
              >
                {isResetLoading ? 'Mise à jour...' : 'Mettre à jour'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;