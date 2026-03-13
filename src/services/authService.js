import { apiSlice } from '../api/apiSlice';

export const authService = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: 'auth/login/',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: 'auth/register/',
        method: 'POST',
        body: userData,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: 'auth/forgot-password/',
        method: 'POST',
        body: data,
      }),
    }),
    // AJOUTE CETTE PARTIE ICI :
    resetPassword: builder.mutation({
      query: (data) => ({
        url: 'auth/reset-password/',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

// N'oublie pas de l'ajouter dans l'export automatique en bas
export const { 
  useLoginMutation, 
  useRegisterMutation, 
  useForgotPasswordMutation,
  useResetPasswordMutation // <--- Vérifie que c'est bien écrit ici
} = authService;