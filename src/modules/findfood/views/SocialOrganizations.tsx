import React, { useEffect, useState } from 'react';
import Layout from '../../layout/Layout';
import GroupIcon from '@mui/icons-material/Group';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import './SocialOrganizations.css'; // Importar el archivo CSS

const organizations = [
  { name: 'Fundación Esperanza', contact: 'contacto@esperanza.org' },
  { name: 'Comedor Solidario', contact: 'info@comedorsolidario.org' },
  { name: 'Red de Apoyo', contact: 'red@apoyo.org' },
];

const stats = [
  { icon: <GroupIcon className="text-4xl text-green-500" />, label: 'Organizaciones Aliadas', value: 149 },
  { icon: <EmojiEventsIcon className="text-4xl text-yellow-500" />, label: 'Proyectos Sociales', value: 32 },
];

const SocialOrganizations: React.FC = () => {
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
      <div className="relative min-h-[90vh] flex flex-col items-center justify-center py-12 bg-gradient-to-br from-yellow-100 to-green-100 overflow-hidden">
        <img
          src="/certificates/nin2.jpg"
          alt="Fondo"
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        />
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-green-700 mb-8 text-center drop-shadow-lg animate-fadeIn">
            Organizaciones Sociales
          </h1>
          <div className="bg-white/90 rounded-2xl shadow-xl p-8 animate-fadeInUp">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left py-2">Nombre</th>
                  <th className="text-left py-2">Contacto</th>
                </tr>
              </thead>
              <tbody>
                {organizations.map((org, idx) => (
                  <tr key={idx} className="hover:bg-green-50 transition">
                    <td className="py-2 font-semibold">{org.name}</td>
                    <td className="py-2">
                      <a href={`mailto:${org.contact}`} className="text-blue-600 underline">{org.contact}</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
                <div className="text-3xl font-extrabold text-green-600 mt-2 mb-1 animate-pulse">
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

export default SocialOrganizations; 