import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { FaFileAlt, FaEnvelope, FaUsers, FaHotel, FaProjectDiagram } from 'react-icons/fa';
import { useHotels } from '../../context/HotelContext';

const Dashboard = () => {
  const { hotels } = useHotels();

  const stats = [
    { label: 'Formulaires', value: '125', icon: <FaFileAlt />, color: 'bg-purple-600', sub: '...' },
    { label: 'Messages', value: '40', icon: <FaEnvelope />, color: 'bg-teal-500', sub: '...' },
    { label: 'Utilisateurs', value: '600', icon: <FaUsers />, color: 'bg-yellow-500', sub: '...' },
    { label: 'E-mails', value: '25', icon: <FaEnvelope />, color: 'bg-red-500', sub: '...' },
    { label: 'Hôtels', value: hotels.length, icon: <FaHotel />, color: 'bg-purple-800', sub: '...' },
    { label: 'Entités', value: '02', icon: <FaProjectDiagram />, color: 'bg-blue-600', sub: '...' },
  ];

  return (
    <DashboardLayout title="Dashboard">
      <div className="bg-white backdrop-blur-md -mx-8 px-8 py-6 mb-8 border-b border-gray-100 shadow-sm">
        <h3 className="text-3xl font-light text-gray-800 uppercase tracking-tight">
          Bienvenue sur RED Product
        </h3>
        <p className="text-gray-500 text-sm mt-1">
          Gérez vos activités en toute simplicité.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-6 border-none hover:shadow-md transition-all">
            <div className={`${stat.color} w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl`}>
              {stat.icon}
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-gray-800">{stat.value}</span>
                <span className="text-lg text-gray-500 font-light">{stat.label}</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">Bienvenue</p>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;