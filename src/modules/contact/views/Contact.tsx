import React, { useEffect, useState } from 'react';
import Layout from '../../layout/Layout';
import EmailIcon from '@mui/icons-material/Email';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import './Contact.css'; // Importar el archivo CSS

const stats = [
  { icon: <EmailIcon className="text-4xl text-blue-500" />, label: 'Mensajes Recibidos', value: 1200 },
  { icon: <VolunteerActivismIcon className="text-4xl text-green-500" />, label: 'Consultas Atendidas', value: 950 },
];

const Contact: React.FC = () => {
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
      <div className="relative min-h-[90vh] flex flex-col items-center justify-center py-12 bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden">
        <img
          src="/certificates/nin2.jpg"
          alt="Fondo"
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        />
        <div className="relative z-10 w-full max-w-xl mx-auto">
          <h1 className="text-4xl font-extrabold text-blue-700 mb-8 text-center drop-shadow-lg animate-fadeIn flex items-center gap-2">
            <EmailIcon className="text-4xl" /> Contáctanos
          </h1>
          <div className="bg-white/90 rounded-2xl shadow-xl p-8 animate-fadeInUp">
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Nombre" className="border rounded px-4 py-2" />
              <input type="email" placeholder="Correo electrónico" className="border rounded px-4 py-2" />
              <textarea placeholder="Mensaje" className="border rounded px-4 py-2" />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition">
                Enviar mensaje
              </button>
            </form>
            <div className="mt-6 text-gray-700">
              <p>O escríbenos a <a href="mailto:info@bancodealimentos.org" className="text-blue-600 underline">info@bancodealimentos.org</a></p>
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
                <div className="text-3xl font-extrabold text-blue-600 mt-2 mb-1 animate-pulse">
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

export default Contact; 