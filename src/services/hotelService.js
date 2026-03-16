// import { apiSlice } from "../api/apiSlice"; // Importe ta base

// export const hotelService = apiSlice.injectEndpoints({
//     endpoints: (builder) => ({
//         // Récupérer la liste (GET)
//         getHotels: builder.query({
//             query: () => '/hotels/',
//             providesTags: ['Hotel'],
//         }),
//        // Dans ton hotelService.js
// addHotel: builder.mutation({
//   query: (formData) => ({
//     url: 'hotels/',
//     method: 'POST',
//     body: formData, // On envoie le FormData brut ici
//     // Important : Ne pas ajouter de headers Content-Type ici, 
//     // le navigateur le fera automatiquement avec le "boundary" nécessaire.
//   }),
//   invalidatesTags: ['Hotels'], // Cela force React à recharger la liste automatiquement
// }),
//     }),
// });

// // Export des hooks automatiques
// export const { useGetHotelsQuery, useAddHotelMutation } = hotelService;

import { apiSlice } from "../api/apiSlice"; 

export const hotelService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // Récupérer la liste (GET)
        getHotels: builder.query({
            query: () => 'hotels/', // Pas besoin du slash au début si baseUrl finit par /
            providesTags: ['Hotel'],
        }),

        // Ajouter un hôtel (POST)
        addHotel: builder.mutation({
            query: (formData) => ({
                url: 'hotels/',
                method: 'POST',
                body: formData, 
                // Le navigateur gère le Content-Type automatiquement pour FormData
            }),
            // On utilise le même tag que getHotels pour rafraîchir la liste
            invalidatesTags: ['Hotel'], 
        }),
    }),
});

export const { useGetHotelsQuery, useAddHotelMutation } = hotelService;