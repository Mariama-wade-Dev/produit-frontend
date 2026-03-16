// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const apiSlice = createApi({
//     reducerPath: 'api',
//     baseQuery: fetchBaseQuery({
//         baseUrl: import.meta.env.VITE_API_URL, 
//         prepareHeaders: (headers, { getState }) => {
//             const token = getState().auth.token;
//             if (token) {
//                 headers.set('authorization', `Bearer ${token}`);
//             }
//             return headers;
//         },
//     }),
//     tagTypes: ['Hotel', 'User'], 
//     endpoints: (builder) => ({}), // On laisse vide, les services injecteront leurs endpoints ici
// });

// apiSlice.js


import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    // Remplace par ton URL Render si tu es en prod
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      // 1. On récupère le token stocké dans le localStorage
      const token = localStorage.getItem('token');
      
      // 2. Si le token existe, on l'ajoute au Header Authorization
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      
      return headers;
    },
  }),
  tagTypes: ['Hotel'],
  endpoints: (builder) => ({}),
});