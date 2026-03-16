// import { createSlice } from '@reduxjs/toolkit';

// const authSlice = createSlice({
//     name: 'auth',
//     initialState: { 
//         user: null, 
//         token: localStorage.getItem('token') || null // Récupère le token au rafraîchissement
//     },
//     reducers: {
//         // Appelé lors d'une connexion réussie
//         setCredentials: (state, action) => {
//             const { user, access } = action.payload; 
//             state.user = user;
//             state.token = access;
//             localStorage.setItem('token', access); // Sauvegarde pour ne pas être déconnecté
//         },
//         // Appelé pour la déconnexion
//         logOut: (state) => {
//             state.user = null;
//             state.token = null;
//             localStorage.removeItem('token');
//         },
//     },
// });

// export const { setCredentials, logOut } = authSlice.actions;
// export default authSlice.reducer;

// // Sélecteurs pour récupérer les infos n'importe où dans l'app
// export const selectCurrentToken = (state) => state.auth.token;
// export const selectCurrentUser = (state) => state.auth.user;

import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: localStorage.getItem('username') || null,
    token: localStorage.getItem('token') || null,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { user, access } = action.payload;
      state.user = user;
      state.token = access;
      // Sauvegarde physique pour la Sidebar et les futurs refresh
      localStorage.setItem('token', access);
      localStorage.setItem('username', user);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
      localStorage.removeItem('username');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = (state) => state.auth.user;