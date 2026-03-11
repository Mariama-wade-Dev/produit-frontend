import React, { createContext, useContext, useState } from 'react';

const HotelContext = createContext();

export const HotelProvider = ({ children }) => {
  const [hotels, setHotels] = useState([
    { id: 1, name: 'Casablanca Hotel', address: 'Boulevard de la Corniche', price: '45.000', currency: 'FCFA', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400' },
    { id: 2, name: 'Terrou-Bi', address: 'Boulevard Martin Luther King', price: '85.000', currency: 'FCFA', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400' },
    { id: 3, name: 'Radisson Blu', address: 'Route de la Corniche Ouest', price: '75.000', currency: 'FCFA', image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400' },
    { id: 4, name: 'Pullman Dakar', address: 'Place de l\'Indépendance', price: '60.000', currency: 'FCFA', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400' },
    { id: 5, name: 'King Fahd Palace', address: 'Pointe des Almadies', price: '95.000', currency: 'FCFA', image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400' },
    { id: 6, name: 'Hôtel Savana', address: 'Route de la Corniche Est', price: '40.000', currency: 'FCFA', image: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=400' },
    { id: 8, name: 'Le Méridien', address: 'Quartier du Plateau', price: '70.000', currency: 'FCFA', image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=400' },
    { id: 9, name: 'Palm Beach', address: 'Saly Portudal', price: '35.000', currency: 'FCFA', image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400' },
    { id: 10, name: 'Azalaï Hotel', address: 'Ancienne Piste', price: '50.000', currency: 'FCFA', image: 'https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?w=400' },
  ]);

  const addHotel = (newHotel) => {
    setHotels((prev) => [...prev, { ...newHotel, id: prev.length + 1 }]);
  };

  return (
    <HotelContext.Provider value={{ hotels, addHotel }}>
      {children}
    </HotelContext.Provider>
  );
};

export const useHotels = () => useContext(HotelContext);