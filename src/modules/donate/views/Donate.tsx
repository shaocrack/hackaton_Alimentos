import React, { useEffect, useState } from 'react';
import Layout from '../../layout/Layout';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const stats = [
  { icon: <FavoriteIcon className="text-4xl text-pink-500" />, label: 'Donaciones Recibidas', value: 1500 },
  { icon: <EmojiEventsIcon className="text-4xl text-orange-500" />, label: 'Proyectos Financiados', value: 28 },
];

const Donate: React.FC = () => {
  const [displayStats, setDisplayStats] = useState([0, 0]);
  useEffect(() => {
    const intervals = stats.map((stat, i) =>
      setInterval(() => {
        setDisplayStats(prev =>
          prev.map((v, idx) => idx === i && v < stat.value ? v + Math.ceil(stat.value / 50) : v)
        );
      }, 30)
    );
    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <Layout>
      <div className="relative min-h-[90vh] flex flex-col items-center justify-center py-12 bg-gradient-to-br from-pink-100 to-orange-100 overflow-hidden">
        <img
          src="/certificates/nin2.jpg"
          alt="Fondo"
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        />
        <div className="relative z-10 w-full max-w-xl mx-auto">
          <h1 className="text-4xl font-extrabold text-pink-700 mb-8 text-center drop-shadow-lg animate-fadeIn flex items-center gap-2">
            <FavoriteIcon className="text-4xl" /> Donar
          </h1>
          <div className="bg-white/90 rounded-2xl shadow-xl p-8 flex flex-col items-center animate-fadeInUp">
            <p className="mb-6 text-lg text-center text-gray-700">
              Tu aporte puede cambiar vidas. Dona ahora y sé parte de la solución al hambre en Ecuador.
            </p>
            <button className="bg-pink-600 text-white px-8 py-3 rounded-lg font-bold text-xl hover:bg-pink-700 transition">
              Donar ahora
            </button>
          </div>
          {/* Estadísticas animadas */}
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col items-center bg-white/90 rounded-xl shadow-lg px-8 py-6 min-w-[220px] animate-fadeInUp"
                style={{ animationDelay: `${0.3 + i * 0.1}s` }}
              >
                {stat.icon}
                <div className="text-3xl font-extrabold text-pink-600 mt-2 mb-1 animate-pulse">
                  {displayStats[i].toLocaleString()}
                </div>
                <div className="text-lg text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Animaciones CSS */}
        <style>{`
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px);} to { opacity: 1; transform: none; } }
          .animate-fadeIn { animation: fadeIn 1s both; }
          .animate-fadeInUp { animation: fadeInUp 1s both; }
        `}</style>
      </div>
    </Layout>
  );
};

export default Donate; 