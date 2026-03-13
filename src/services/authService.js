import { apiSlice } from "../app/api/apiSlice";

export const authService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // Mutation pour le Login
        login: builder.mutation({
            query: (credentials) => ({
                url: 'auth/login/',
                method: 'POST',
                body: credentials,
            }),
        }),

        // Mutation pour l'Inscription (on adapte 'nom' -> 'username')
        register: builder.mutation({
            query: (userData) => ({
                url: 'auth/register/',
                method: 'POST',
                body: {
                    username: userData.nom, // Ton champ 'nom' du formulaire
                    email: userData.email,
                    password: userData.password
                },
            }),
        }),

        // Mutation pour l'oubli de mot de passe (envoi de mail)
        forgotPassword: builder.mutation({
            query: (data) => ({
                url: 'auth/password_reset/',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

// RTK Query génère automatiquement ces hooks basés sur les noms des endpoints
export const {
    useLoginMutation,
    useRegisterMutation,
    useForgotPasswordMutation,
} = authService;