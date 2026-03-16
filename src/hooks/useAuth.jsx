// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setCredentials } from '../services/authSlice';
// import { 
//   useLoginMutation, 
//   useRegisterMutation, 
//   useForgotPasswordMutation,
//   useResetPasswordMutation // N'oublie pas d'ajouter l'import ici
// } from '../services/authService';

// export const useAuth = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // États du formulaire
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');

//   // Hooks Redux Toolkit avec renommage des états de chargement
//   const [loginApi, { isLoading: isLoggingIn }] = useLoginMutation();
//   const [registerApi, { isLoading: isRegistering }] = useRegisterMutation();
//   const [forgotApi, { isLoading: isForgotLoading }] = useForgotPasswordMutation();
//   const [resetApi, { isLoading: isResetLoading }] = useResetPasswordMutation();

//   // Connexion
//   const login = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await loginApi({ email: email, password: password }).unwrap();
//       dispatch(setCredentials(response));
//       console.log("Connexion réussie !");
//       navigate('/dashboard');
//     } catch (err) {
//       console.error("Erreur connexion :", err);
//     }
//   };

//   // Inscription
//   const register = async (e) => {
//     e.preventDefault();
//     try {
//       await registerApi({ username: name, email, password }).unwrap();
//       console.log("Inscription OK");
//       navigate('/login');
//     } catch (err) {
//       console.error("Erreur inscription :", err);
//     }
//   };

//   // Mot de passe oublié
//   const forgot = async (e) => {
//     e.preventDefault();
//     try {
//       await forgotApi({ email }).unwrap();
//       navigate('/reset-password');
//     } catch (err) {
//       console.error("Erreur forgot password :", err);
//     }
//   };

//   // Réinitialisation du mot de passe
//   const reset = async (e) => {
//     e.preventDefault();
//     try {
//       await resetApi({ password }).unwrap();
//       navigate('/login');
//     } catch (err) {
//       console.error("Erreur reset password :", err);
//     }
//   };

//   return {
//     email, setEmail,
//     password, setPassword,
//     name, setName,
//     login,
//     register,
//     forgot,
//     reset,
//     isLoggingIn,
//     isRegistering,
//     isForgotLoading, // Ajouté pour tes composants
//     isResetLoading   // Ajouté pour tes composants
//   };
// };

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../services/authSlice';
import { 
  useLoginMutation, 
  useRegisterMutation, 
  useForgotPasswordMutation,
  useResetPasswordMutation 
} from '../services/authService';

export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // États du formulaire
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  // Hooks Redux Toolkit Mutation
  const [loginApi, { isLoading: isLoggingIn }] = useLoginMutation();
  const [registerApi, { isLoading: isRegistering }] = useRegisterMutation();
  const [forgotApi, { isLoading: isForgotLoading }] = useForgotPasswordMutation();
  const [resetApi, { isLoading: isResetLoading }] = useResetPasswordMutation();

  // 1. CONNEXION
  const login = async (e) => {
    if (e) e.preventDefault();
    try {
      const response = await loginApi({ email, password }).unwrap();
      
      // On prépare les données pour Redux et le LocalStorage
      // On récupère le username envoyé par Django, sinon on découpe l'email
      const userData = {
        user: response.username || response.user || email.split('@')[0],
        access: response.access
      };

      // Met à jour le state global et le stockage local
      dispatch(setCredentials(userData));
      
      console.log("Connexion réussie !");
      navigate('/dashboard');
    } catch (err) {
      console.error("Erreur connexion :", err);
      alert("Erreur de connexion : vérifiez vos identifiants (Email/Password)");
    }
  };

  // 2. INSCRIPTION
  const register = async (e) => {
    if (e) e.preventDefault();
    try {
      // 'name' correspond au champ 'username' attendu par Django
      await registerApi({ username: name, email, password }).unwrap();
      console.log("Inscription réussie");
      navigate('/login');
    } catch (err) {
      console.error("Erreur inscription :", err);
      alert("Erreur lors de l'inscription. L'utilisateur existe peut-être déjà.");
    }
  };

  // 3. MOT DE PASSE OUBLIÉ
  const forgot = async (e) => {
    if (e) e.preventDefault();
    try {
      await forgotApi({ email }).unwrap();
      console.log("Email de récupération envoyé");
      navigate('/reset-password');
    } catch (err) {
      console.error("Erreur forgot password :", err);
      alert("Erreur : Impossible d'envoyer l'email de récupération.");
    }
  };

  // 4. RÉINITIALISATION DU MOT DE PASSE
  const reset = async (e) => {
    if (e) e.preventDefault();
    try {
      await resetApi({ password }).unwrap();
      console.log("Mot de passe réinitialisé");
      navigate('/login');
    } catch (err) {
      console.error("Erreur reset password :", err);
      alert("Erreur lors de la réinitialisation du mot de passe.");
    }
  };

  return {
    email, 
    setEmail,
    password, 
    setPassword,
    name, 
    setName,
    login,
    register,
    forgot,
    reset,
    isLoggingIn,
    isRegistering,
    isForgotLoading,
    isResetLoading
  };
};

export default useAuth;