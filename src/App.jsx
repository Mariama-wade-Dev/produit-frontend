import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import Dashboard from './pages/dashboard/Dashboard';
import HotelsPage from './pages/dashboard/HotelsPage';

// Import du Provider pour les données
import { HotelProvider } from './context/HotelContext';

function App() {
  return (
    <HotelProvider>
      <Routes>
        {/* Redirection automatique vers le login au démarrage */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        {/* Pages d'Authentification */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Pages de l'application (le DashboardLayout est à l'intérieur de ces fichiers) */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/hotels" element={<HotelsPage />} />
      </Routes>
    </HotelProvider>
  );
}

export default App;