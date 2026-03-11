import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { useHotels } from '../../context/HotelContext';

const DashboardLayout = ({ children, title, subtitle, actionButton }) => {
  const { hotels } = useHotels();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden font-sans relative">
      
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar hotelsCount={hotels.length} isOpen={sidebarOpen} />

      <div className="flex-1 flex flex-col min-w-0 h-full relative">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/bg-white.png')", backgroundAttachment: 'fixed' }}
        />

        <Navbar 
          title={title} 
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />

        <main className="flex-1 overflow-y-auto p-4 md:p-8 relative z-10">
          <div className="max-w-full mx-auto">
            
            {(subtitle || actionButton) && (
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 bg-white/40 p-4 rounded-xl backdrop-blur-md border border-white/20">
                <div>
                  <h1 className="text-xl md:text-2xl font-bold text-gray-800">
                    {subtitle || title}
                  </h1>
                </div>
                <div className="flex items-center">
                  {actionButton}
                </div>
              </div>
            )}

            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;