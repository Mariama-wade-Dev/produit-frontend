import React, { createContext, useContext } from 'react';
import { useGetHotelsQuery, useAddHotelMutation } from '../services/hotelService';

// 1. On crée le contexte
export const HotelContext = createContext();

// 2. Le Provider qui entoure l'application
export const HotelProvider = ({ children }) => {
  const { data: hotels = [], isLoading, isError } = useGetHotelsQuery();
  const [addHotelMutation] = useAddHotelMutation();

  const addHotel = async (formData) => {
    try {
      return await addHotelMutation(formData).unwrap();
    } catch (error) {
      console.error("Erreur lors de l'ajout:", error);
      throw error;
    }
  };

  return (
    <HotelContext.Provider value={{ hotels, addHotel, isLoading, isError }}>
      {children}
    </HotelContext.Provider>
  );
};

// 3. L'EXPORT MANQUANT (C'est cette ligne qui répare l'erreur !)
export const useHotels = () => {
  const context = useContext(HotelContext);
  if (!context) {
    throw new Error("useHotels must be used within a HotelProvider");
  }
  return context;
};