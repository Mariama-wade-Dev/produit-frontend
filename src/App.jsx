// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
      
//       <p className="bg-red-500 text-white p-4 rounded-lg">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import Dashboard from './pages/dashboard/Dashboard';
import HotelsPage from './pages/dashboard/HotelsPage';

// Import du Provider
import { HotelProvider } from './context/HotelContext';

function App() {
  return (
    // On enveloppe TOUTES les routes avec le Provider
    <HotelProvider>
      <Routes>
        {/* Redirection par défaut */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        {/* Pages d'Authentification */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Pages de l'application */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/hotels" element={<HotelsPage />} />
      </Routes>
    </HotelProvider>
  );
}

export default App;