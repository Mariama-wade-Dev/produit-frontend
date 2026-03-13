import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../services/authSlice';
import { 
  useLoginMutation, 
  useRegisterMutation, 
  useForgotPasswordMutation 
} from '../services/authService';

export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // États du formulaire
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  // Hooks Redux Toolkit
  const [loginApi, { isLoading: isLoggingIn }] = useLoginMutation();
  const [registerApi, { isLoading: isRegistering }] = useRegisterMutation();
  const [forgotApi] = useForgotPasswordMutation();

  // Connexion
  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await loginApi({ username: email, password }).unwrap();
      // On stocke le token et l'user dans le store Redux
      dispatch(setCredentials(response));
      console.log("Connexion OK");
      navigate('/dashboard');
    } catch (err) {
      console.error("Erreur connexion :", err);
    }
  };

  // Inscription
  const register = async (e) => {
    e.preventDefault();
    try {
      await registerApi({ nom: name, email, password }).unwrap();
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
      console.log("Instructions envoyées");
      navigate('/reset-password');
    } catch (err) {
      console.error("Erreur forgot password :", err);
    }
  };

  return {
    email, setEmail,
    password, setPassword,
    name, setName,
    login,
    register,
    forgot,
    isLoggingIn,
    isRegistering
  };
};