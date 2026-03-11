import { Link } from 'react-router-dom';
import AuthHeader from '../../components/common/AuthHeader';
import { useAuth } from '../../hooks/useAuth';

const ForgotPassword = () => {
  const { email, setEmail, forgot } = useAuth();

  return (
    <div className="fixed inset-0 w-full h-[100dvh] flex items-center justify-center p-4 overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url('/bg-auth.png')` }}
      />

      <div className="flex flex-col items-center z-10">
        <AuthHeader logo="/logo.png" title="Red Product" />

        <div className="bg-white rounded-sm shadow-2xl flex flex-col justify-between p-6 w-[260px] min-h-[290px]">
          <div className="flex flex-col justify-center h-full space-y-4">
            <h1 className="text-black text-base font-bold text-center">
              Mot de passe oublié ?
            </h1>
            <p className="text-gray-500 text-[10px] leading-relaxed text-center font-medium">
              Entrez votre adresse e-mail ci-dessous et nous vous enverrons les instructions pour réinitialiser votre mot de passe.
            </p>

            <form onSubmit={forgot} className="flex flex-col space-y-4">
              <input 
                type="email" 
                placeholder="Votre e-mail" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                className="w-full border-b border-gray-200 pb-1 text-sm text-gray-700 bg-transparent outline-none" 
              />

              <button 
                type="submit" 
                className="w-full bg-[#45484D] text-white py-3 rounded-sm font-bold text-sm shadow-md mt-4 hover:bg-black transition-all"
              >
                Envoyer
              </button>
            </form>
          </div>

          <div className="mt-6 text-center space-y-1 text-[12px] font-bold">
            <span className="text-black">Retour à la </span>
            <Link to="/login" className="text-[#FFC107]">
              connexion
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;