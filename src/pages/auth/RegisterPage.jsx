import { Link } from 'react-router-dom';
import AuthHeader from '../../components/common/AuthHeader';
import { useAuth } from '../../hooks/useAuth';

const RegisterPage = () => {
  const { name, setName, email, setEmail, password, setPassword, register, isRegistering } = useAuth();

  return (
    <div className="fixed inset-0 w-full h-[100dvh] flex items-center justify-center p-4 overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url('/bg-auth.png')` }}
      />

      <div className="flex flex-col items-center z-10">
        <AuthHeader logo="/logo.png" title="Red Product" />

        <div className="bg-white rounded-sm shadow-2xl flex flex-col justify-between p-6 w-[280px] min-h-[380px]">
          <div className="flex flex-col justify-center h-full">
            <p className="text-neutral-700 text-sm  font-medium mb-8">
              Inscrivez-vous en tant que Admin
            </p>

            <form onSubmit={register} className="flex flex-col space-y-6">
              <input
                type="text"
                placeholder="Nom"
                required
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-b border-gray-200 pb-1 text-sm text-gray-700 bg-transparent outline-none placeholder-gray-400"
              />

              <input
                type="email"
                placeholder="E-mail"
                required
                autoComplete="off"
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
                  id="terms"
                  required
                  className="w-3.5 h-3.5 accent-[#45484D] cursor-pointer"
                />
                <label
                  htmlFor="terms"
                  className="text-[12px]  text-neutral-700 font-medium cursor-pointer"
                >
                  Accepter les termes et la politique
                </label>
              </div>
            </form>
          </div>

          <button
  type="submit"
  onClick={register}
  disabled={isRegistering} // Empêche le double clic
  className="w-full bg-[#45484D] text-white py-2.5 rounded-sm font-bold text-sm shadow-md mt-6 hover:bg-black transition-all disabled:opacity-50"
>
  {isRegistering ? 'Inscription...' : "S'inscrire"} 
</button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-[12px] text-white font-medium">
            Vous avez déjà un compte ?{' '}
            <Link to="/login" className="text-yellow-300 font-bold ml-1 hover:underline">
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;