import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000/api/', // Ton backend Django
        prepareHeaders: (headers, { getState }) => {
            // On récupère le token depuis le slice d'auth
            const token = getState().auth.token;
            if (token) {
                // On l'ajoute automatiquement à toutes les requêtes sécurisées
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['Hotel', 'User'], // Pour rafraîchir les données automatiquement
    endpoints: (builder) => ({}), // On laisse vide, les services injecteront leurs endpoints ici
});