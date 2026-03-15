import { apiSlice } from "../api/apiSlice"; // Importe ta base

export const hotelService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // Récupérer la liste (GET)
        getHotels: builder.query({
            query: () => '/hotels/',
            providesTags: ['Hotel'],
        }),
       // Dans ton hotelService.js
addHotel: builder.mutation({
  query: (formData) => ({
    url: 'hotels/',
    method: 'POST',
    body: formData, // On envoie le FormData brut ici
    // Important : Ne pas ajouter de headers Content-Type ici, 
    // le navigateur le fera automatiquement avec le "boundary" nécessaire.
  }),
  invalidatesTags: ['Hotels'], // Cela force React à recharger la liste automatiquement
}),
    }),
});

// Export des hooks automatiques
export const { useGetHotelsQuery, useAddHotelMutation } = hotelService;