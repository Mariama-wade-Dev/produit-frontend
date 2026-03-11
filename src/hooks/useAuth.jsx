import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { loginUser, registerUser, forgotPassword, resetPassword } from '../services/authService';

export const useAuth = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  // Connexion
  const login = async (e) => {
    e.preventDefault();
    const response = await loginUser(email, password);
    if (response.success) {
      console.log("Connexion OK :", response.token);
      navigate('/dashboard');
    }
  };

  // Inscription
  const register = async (e) => {
    e.preventDefault();
    const response = await registerUser(name, email, password);
    if (response.success) {
      console.log("Inscription OK");
      navigate('/login');
    }
  };

  // Mot de passe oublié
  const forgot = async (e) => {
    e.preventDefault();
    const response = await forgotPassword(email);
    if (response.success) {
      console.log("Instructions envoyées");
      navigate('/reset-password');
    }
  };

  // Réinitialisation mot de passe
  const reset = async (e) => {
    e.preventDefault();
    const response = await resetPassword(password);
    if (response.success) {
      console.log("Mot de passe réinitialisé");
      navigate('/login');
    }
  };

  return {
    email, setEmail,
    password, setPassword,
    name, setName,
    login,
    register,
    forgot,
    reset
  };
};