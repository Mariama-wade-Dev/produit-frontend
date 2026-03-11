

import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { useHotels } from '../../context/HotelContext';
import { FaPlus, FaCamera } from 'react-icons/fa';

const HotelsPage = () => {
  const { hotels, addHotel } = useHotels();
  const [showModal, setShowModal] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [newHotel, setNewHotel] = useState({ name:'', address:'', email:'', phone:'', price:'', currency:'F XOF', image:null });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if(file) { 
      setNewHotel({...newHotel, image:file}); 
      setPreviewImage(URL.createObjectURL(file)); 
    }
  };

  const handleAddHotel = (e) => {
    e.preventDefault();
    const finalImage = previewImage || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400';
    addHotel({ ...newHotel, id: Date.now(), image: finalImage });
    setShowModal(false);
    setPreviewImage(null);
    setNewHotel({ name:'', address:'', email:'', phone:'', price:'', currency:'F XOF', image:null });
  };

  const createButton = (
    <button 
      onClick={() => setShowModal(true)} 
      className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all shadow-sm active:scale-95"
    >
      <FaPlus className="text-[10px]" /> Créer un nouveau hôtel
    </button>
  );

  return (
    <DashboardLayout 
      title="Liste des hôtels" 
      subtitle={<>Hôtels <span className="text-gray-400 ml-2 font-light">{hotels.length}</span></>}
      actionButton={createButton}
    >
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-10">
        {hotels.map(hotel => (
          <div key={hotel.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-all duration-300 group">
            <div className="h-44 w-full overflow-hidden">
              <img 
                src={hotel.image} 
                alt={hotel.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
            <div className="p-4">
              <p className="text-[10px] text-orange-700 font-bold mb-1 uppercase tracking-wider">{hotel.address}</p>
              <h4 className="text-base font-bold text-gray-800 mb-1 truncate">{hotel.name}</h4>
              <p className="text-xs text-gray-600 font-medium">{hotel.price} {hotel.currency} par nuit</p>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in duration-200">
            
            <div className="p-4 border-b border-dashed border-gray-200 flex items-center gap-4 shrink-0">
              <button 
                onClick={() => setShowModal(false)} 
                className="text-gray-400 hover:text-black transition-colors p-1"
              >
                <span className="text-2xl">←</span>
              </button>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                Créer un nouveau hôtel
              </h3>
            </div>

            <form onSubmit={handleAddHotel} className="flex flex-col overflow-hidden">
              <div className="p-8 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                  {['name','address','email','phone','price'].map(field => (
                    <div key={field} className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-gray-700">{field === 'name' ? "Nom de l'hôtel" : field.charAt(0).toUpperCase()+field.slice(1)}</label>
                      <input 
                        type={field==='email'?'email':'text'} 
                        required 
                        value={newHotel[field]} 
                        onChange={e=>setNewHotel({...newHotel,[field]:e.target.value})} 
                        className="border border-gray-200 bg-gray-50/50 rounded-xl p-3 text-sm outline-none focus:border-gray-400 transition-colors" 
                        placeholder={`${field}...`} 
                      />
                    </div>
                  ))}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-gray-700">Devise</label>
                    <select className="border border-gray-200 bg-gray-50/50 rounded-xl p-3 text-sm outline-none bg-white cursor-pointer"><option>F XOF</option></select>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="text-xs font-bold text-gray-700 mb-3 block">Ajouter une photo</label>
                  <div className="border-2 border-dashed border-gray-200 rounded-2xl h-40 flex flex-col items-center justify-center relative bg-gray-50/30 hover:bg-gray-50 transition-colors overflow-hidden group">
                    {previewImage ? 
                      <img src={previewImage} alt="Preview" className="w-full h-full object-cover" /> :
                      <div className="flex flex-col items-center gap-2 text-gray-300 group-hover:text-gray-400 transition-colors">
                        <FaCamera size={32} />
                        <p className="text-xs font-medium">Cliquez pour ajouter une photo</p>
                      </div>
                    }
                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleFileChange} />
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-gray-100 flex justify-end shrink-0">
                <button type="submit" className="bg-[#444444] text-white px-10 py-3 rounded-xl font-bold text-sm hover:bg-black transition-all shadow-lg active:scale-95">
                  Enregistrer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default HotelsPage;