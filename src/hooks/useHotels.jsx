import { useContext } from 'react';
import { HotelContext } from '../context/HotelContext';

export const useHotels = () => {
  const context = useContext(HotelContext);
  if (!context) {
    throw new Error("useHotels doit être utilisé dans un HotelProvider");
  }
  return context;
};