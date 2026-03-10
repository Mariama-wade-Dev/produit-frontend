import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHotels } from '../../context/HotelContext'; 
import { 
  FaChartPie, FaHotel, FaPlus, FaCamera, 
  FaSearch, FaBell, FaSignOutAlt 
} from 'react-icons/fa';

const HotelsPage = () => {
  const navigate = useNavigate();
  const { hotels, addHotel } = useHotels(); 
  
  const [showModal, setShowModal] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [newHotel, setNewHotel] = useState({ 
    name: '', address: '', email: '', phone: '', price: '', currency: 'F XOF', image: null 
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewHotel({ ...newHotel, image: file });
      setPreviewImage(URL.createObjectURL(file)); 
    }
  };

  const handleAddHotel = (e) => {
    e.preventDefault();
    const finalImage = previewImage || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400';
    addHotel({ ...newHotel, id: Date.now(), image: finalImage });
    setShowModal(false);
    setPreviewImage(null);
    setNewHotel({ name: '', address: '', email: '', phone: '', price: '', currency: 'F XOF', image: null });
  };

  return (
    <div className="flex h-screen w-full overflow-hidden font-sans bg-[#F4F4F4]">
      
      {/* --- SIDEBAR FIXE --- */}
      <aside className="w-64 text-white flex flex-col shrink-0 h-full shadow-2xl z-20" 
             style={{ backgroundImage: "url('/bg-sidebar.png')", backgroundSize: 'cover' }}>
        <div className="p-6 flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-6 h-6 object-contain" />
          <span className="font-bold text-lg tracking-tight uppercase italic text-white">Red Product</span>
        </div>
        <nav className="mt-2 flex-1">
          <p className="px-6 py-4 text-[10px] text-gray-400 uppercase font-bold tracking-widest text-white/50">Principal</p>
          <div onClick={() => navigate('/dashboard')} className="px-6 py-4 flex items-center gap-4 text-white/90 hover:bg-white/10 cursor-pointer transition-all">
            <FaChartPie className="text-lg" />
            <span className="text-sm font-medium">Dashboard</span>
          </div>
          <div className="bg-white text-gray-800 py-3 px-6 flex items-center gap-4 cursor-pointer shadow-md">
            <FaHotel className="text-lg" />
            <span className="font-bold text-sm">Liste des hôtels</span>
          </div>
        </nav>
      </aside>

      {/* --- CONTENU DE DROITE --- */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* --- NAVBAR SUPÉRIEURE (RECHERCHE + PROFIL) --- */}
        <header className="h-16 bg-white border-b px-8 flex items-center justify-between shrink-0 z-10 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800">Liste des hôtels</h2>
          
          <div className="flex items-center gap-6">
            {/* Barre de recherche */}
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
              <input 
                type="text" 
                placeholder="Recherche" 
                className="pl-10 pr-4 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm outline-none focus:ring-1 focus:ring-gray-300 w-64"
              />
            </div>
            
            {/* Icônes de droite */}
            <div className="flex items-center gap-4 text-gray-500">
              <div className="relative cursor-pointer">
                <FaBell className="text-lg" />
                <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-[8px] w-4 h-4 flex items-center justify-center rounded-full border-2 border-white font-bold">3</span>
              </div>
              <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 cursor-pointer">
                <img src="https://i.pravatar.cc/150?u=user1" alt="Profil" />
              </div>
              <FaSignOutAlt 
                  className="text-lg cursor-pointer hover:text-red-500 transition-colors" 
                 title="Déconnexion"
                       onClick={() =>  navigate('/login')} // Redirection vers la racine ou login
/>
            </div>
          </div>
        </header>

        {/* --- HEADER SECONDAIRE (Titre + Bouton Créer) --- */}
        <section className="bg-white px-8 py-4 flex items-center justify-between border-b shrink-0">
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-light text-gray-700">Hôtels <span className="text-gray-300 ml-2">{hotels.length}</span></h3>
          </div>
          <button 
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all shadow-sm"
          >
            <FaPlus className="text-xs" />
            Créer un nouveau hôtel
          </button>
        </section>

        {/* --- GRILLE DES HÔTELS (ZONE SCROLLABLE) --- */}
        <div className="flex-1 overflow-y-auto p-8 bg-[#F4F4F4]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-10">
            {hotels.map((hotel) => (
              <div key={hotel.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow">
                <div className="h-44 w-full">
                  <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-3">
                  <p className="text-[10px] text-orange-700 font-medium mb-1 uppercase tracking-tighter">{hotel.address}</p>
                  <h4 className="text-sm font-bold text-gray-800 mb-1 truncate">{hotel.name}</h4>
                  <p className="text-[11px] text-gray-600 font-semibold">{hotel.price} {hotel.currency || 'XOF'} par nuit</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- MODAL --- */}
        {showModal && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-50 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-2xl rounded-lg shadow-xl overflow-y-auto max-h-[95vh]">
              <div className="p-4 border-b border-dashed flex items-center gap-3">
                <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-black font-bold text-xl">←</button>
                <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide">Créer un nouveau hôtel</h3>
              </div>
              
              <form onSubmit={handleAddHotel} className="p-6">
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-gray-600">Nom de l'hôtel</label>
                    <input required type="text" value={newHotel.name} onChange={(e) => setNewHotel({...newHotel, name: e.target.value})} className="border border-gray-300 rounded-md p-2 text-sm outline-none focus:border-purple-500" placeholder="Nom..." />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-gray-600">Adresse</label>
                    <input required type="text" value={newHotel.address} onChange={(e) => setNewHotel({...newHotel, address: e.target.value})} className="border border-gray-300 rounded-md p-2 text-sm outline-none focus:border-purple-500" placeholder="Adresse..." />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-gray-600">E-mail</label>
                    <input required type="email" value={newHotel.email} onChange={(e) => setNewHotel({...newHotel, email: e.target.value})} className="border border-gray-300 rounded-md p-2 text-sm outline-none focus:border-purple-500" placeholder="E-mail..." />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-gray-600">Téléphone</label>
                    <input required type="text" value={newHotel.phone} onChange={(e) => setNewHotel({...newHotel, phone: e.target.value})} className="border border-gray-300 rounded-md p-2 text-sm outline-none focus:border-purple-500" placeholder="Téléphone..." />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-gray-600">Prix</label>
                    <input required type="text" value={newHotel.price} onChange={(e) => setNewHotel({...newHotel, price: e.target.value})} className="border border-gray-300 rounded-md p-2 text-sm outline-none focus:border-purple-500" placeholder="25.000" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-gray-600">Devise</label>
                    <select className="border border-gray-300 rounded-md p-2 text-sm outline-none bg-white">
                      <option>F XOF</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="text-xs font-medium text-gray-600 mb-2 block">Ajouter une photo</label>
                  <div className="border border-gray-300 rounded-md h-40 flex flex-col items-center justify-center relative bg-gray-50/30 overflow-hidden">
                    {previewImage ? (
                      <img src={previewImage} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                      <div className="flex flex-col items-center gap-2 text-gray-300">
                         <FaCamera size={40} />
                         <p className="text-xs font-medium text-gray-400">Ajouter une photo</p>
                      </div>
                    )}
                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleFileChange} />
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button type="submit" className="bg-[#555555] text-white px-10 py-2.5 rounded-md font-bold text-xs hover:bg-black transition-colors">
                    Enregistrer
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default HotelsPage;