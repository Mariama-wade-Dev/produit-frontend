import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';
import authReducer from '../services/authSlice';

export const store = configureStore({
    reducer: {
        // Le reducer généré par RTK Query (pour les appels API)
        [apiSlice.reducerPath]: apiSlice.reducer,
        // Ton reducer personnalisé (pour stocker le token/user)
        auth: authReducer,
    },
    // Middleware nécessaire pour RTK Query (gestion du cache, invalidation, etc.)
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true, // Pour pouvoir débugger avec Redux DevTools
});