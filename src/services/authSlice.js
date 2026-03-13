import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: { 
        user: null, 
        token: localStorage.getItem('token') || null // Récupère le token au rafraîchissement
    },
    reducers: {
        // Appelé lors d'une connexion réussie
        setCredentials: (state, action) => {
            const { user, access } = action.payload; 
            state.user = user;
            state.token = access;
            localStorage.setItem('token', access); // Sauvegarde pour ne pas être déconnecté
        },
        // Appelé pour la déconnexion
        logOut: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem('token');
        },
    },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;

// Sélecteurs pour récupérer les infos n'importe où dans l'app
export const selectCurrentToken = (state) => state.auth.token;
export const selectCurrentUser = (state) => state.auth.user;