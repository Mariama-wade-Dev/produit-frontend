import { Link } from 'react-router-dom';
import AuthHeader from '../../components/common/AuthHeader';
import { useAuth } from '../../hooks/useAuth';

const LoginPage = () => {
  const { email, setEmail, password, setPassword, login } = useAuth();

  return (
    <div className="fixed inset-0 w-full h-[100dvh] flex items-center justify-center p-4 overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url('/bg-auth.png')` }}
      />

      <div className="flex flex-col items-center z-10">
        <AuthHeader logo="/logo.png" title="Red Product" />

        <div className="bg-white rounded-sm shadow-2xl flex flex-col justify-between p-6 w-[280px] min-h-[340px]">
          <div className="flex flex-col justify-center h-full">
            <p className="text-gray-700 text-[13px] font-medium mb-8">
              Connectez-vous en tant que Admin
            </p>

            <form onSubmit={login} className="flex flex-col space-y-6">
              <input
                type="email"
                placeholder="E-mail"
                required
                autoComplete="none" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b border-gray-200 pb-1 text-sm text-gray-700 bg-transparent outline-none placeholder-gray-400"
              />

              <input
                type="password"
                placeholder="Mot de passe"
                required
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b border-gray-200 pb-1 text-sm text-gray-700 bg-transparent outline-none placeholder-gray-400"
              />

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="keep"
                  className="w-3.5 h-3.5 accent-[#45484D] cursor-pointer"
                />
                <label
                  htmlFor="keep"
                  className="text-[11px] text-gray-600 cursor-pointer font-medium"
                >
                  Gardez-moi connecté
                </label>
              </div>
            </form>
          </div>

          <button
            type="submit"
            onClick={login}
            className="w-full bg-[#45484D] text-white py-2.5 rounded-sm font-bold text-sm shadow-md mt-6 hover:bg-black transition-all"
          >
            Se connecter
          </button>
        </div>

        <div className="mt-4 text-center space-y-2">
          <Link
            to="/forgot-password"
            className="block text-[#FFC107] text-[12px] font-bold hover:underline"
          >
            Mot de passe oublié ?
          </Link>
          <p className="text-[12px] text-white">
            Vous n'avez pas de compte ?{' '}
            <Link to="/register" className="text-[#FFC107] font-bold ml-1 hover:underline">
              S'inscrire
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;