import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../services/authSlice';
import { 
  useLoginMutation, 
  useRegisterMutation, 
  useForgotPasswordMutation,
  useResetPasswordMutation // N'oublie pas d'ajouter l'import ici
} from '../services/authService';

export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // États du formulaire
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  // Hooks Redux Toolkit avec renommage des états de chargement
  const [loginApi, { isLoading: isLoggingIn }] = useLoginMutation();
  const [registerApi, { isLoading: isRegistering }] = useRegisterMutation();
  const [forgotApi, { isLoading: isForgotLoading }] = useForgotPasswordMutation();
  const [resetApi, { isLoading: isResetLoading }] = useResetPasswordMutation();

  // Connexion
  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await loginApi({ email: email, password: password }).unwrap();
      dispatch(setCredentials(response));
      console.log("Connexion réussie !");
      navigate('/dashboard');
    } catch (err) {
      console.error("Erreur connexion :", err);
    }
  };

  // Inscription
  const register = async (e) => {
    e.preventDefault();
    try {
      await registerApi({ username: name, email, password }).unwrap();
      console.log("Inscription OK");
      navigate('/login');
    } catch (err) {
      console.error("Erreur inscription :", err);
    }
  };

  // Mot de passe oublié
  const forgot = async (e) => {
    e.preventDefault();
    try {
      await forgotApi({ email }).unwrap();
      navigate('/reset-password');
    } catch (err) {
      console.error("Erreur forgot password :", err);
    }
  };

  // Réinitialisation du mot de passe
  const reset = async (e) => {
    e.preventDefault();
    try {
      await resetApi({ password }).unwrap();
      navigate('/login');
    } catch (err) {
      console.error("Erreur reset password :", err);
    }
  };

  return {
    email, setEmail,
    password, setPassword,
    name, setName,
    login,
    register,
    forgot,
    reset,
    isLoggingIn,
    isRegistering,
    isForgotLoading, // Ajouté pour tes composants
    isResetLoading   // Ajouté pour tes composants
  };
};