import React, { useEffect, useState } from 'react';
import Layout from '../../layout/Layout';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import './Volunteering.css'; // Importar el archivo CSS

const stats = [
  { icon: <VolunteerActivismIcon className="text-4xl text-pink-500" />, label: 'Voluntarios Activos', value: 320 },
  { icon: <EmojiEventsIcon className="text-4xl text-orange-500" />, label: 'Proyectos Completados', value: 45 },
  { icon: <PeopleAltIcon className="text-4xl text-green-500" />, label: 'Personas Impactadas', value: 15000 },
];

const Volunteering: React.FC = () => {
  const [displayStats, setDisplayStats] = useState([0, 0, 0]);
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
        <div className="relative z-10 w-full max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold text-pink-700 mb-8 text-center drop-shadow-lg animate-fadeIn">
            Voluntariado
          </h1>
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="flex-1 bg-white/80 rounded-2xl shadow-xl p-8 flex flex-col items-center animate-fadeInUp">
              <VolunteerActivismIcon className="text-6xl text-pink-400 mb-2" />
              <h2 className="text-2xl font-bold mb-2">¿Por qué ser voluntario?</h2>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Desarrollo personal y profesional.</li>
                <li>Impacto social real.</li>
                <li>Certificado de participación.</li>
              </ul>
            </div>
            <div className="flex-1 bg-white/80 rounded-2xl shadow-xl p-8 flex flex-col items-center animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-2xl font-bold mb-2">¿Cómo participar?</h2>
              <ol className="list-decimal list-inside text-gray-700 mb-4">
                <li>Regístrate como voluntario.</li>
                <li>Participa en nuestros proyectos.</li>
                <li>Recibe tu reconocimiento.</li>
              </ol>
              <button className="bg-pink-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-pink-700 transition mt-2">
                Quiero ser voluntario
              </button>
            </div>
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
        {/* <style>{`
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px);} to { opacity: 1; transform: none; } }
          .animate-fadeIn { animation: fadeIn 1s both; }
          .animate-fadeInUp { animation: fadeInUp 1s both; }
        `}</style> */}
      </div>
    </Layout>
  );
};

export default Volunteering; 