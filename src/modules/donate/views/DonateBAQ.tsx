import React, { useEffect, useState } from 'react';
import Layout from '../../layout/Layout';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './DonateBAQ.css';

const stats = [
  { icon: <EmojiEventsIcon className="stat-icon text-blue-500" />, label: 'Kilos Donados en Quito', value: 85000 },
  { icon: <FavoriteIcon className="stat-icon text-pink-500" />, label: 'Donadores BAQ', value: 210 },
  { icon: <LocationCityIcon className="stat-icon text-blue-700" />, label: 'Familias Beneficiadas', value: 12000 },
];

const DonateBAQ: React.FC = () => {
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
      <div className="donate-container">
        <div className="donate-overlay" />
        <div className="donate-content">
          <h1 className="donate-title animate-fadeIn">
            Donar en Quito
          </h1>
          
          <p className="donate-subtitle animate-fadeIn">
            Únete a nuestra red de donantes en Quito y ayuda a combatir el hambre en nuestra ciudad. 
            Tu aporte hace la diferencia en la vida de miles de familias quiteñas.
          </p>

          <div className="donate-cards">
            <div className="donate-card animate-scaleIn">
              <LocationCityIcon className="card-icon" />
              <h2 className="card-title">¿Por qué donar en Quito?</h2>
              <ul className="card-content list-disc list-inside space-y-2">
                <li>Impacto directo en la comunidad quiteña</li>
                <li>Logística optimizada para la ciudad</li>
                <li>Red de distribución local eficiente</li>
                <li>Transparencia en el proceso</li>
              </ul>
            </div>

            <div className="donate-card animate-scaleIn" style={{ animationDelay: '0.2s' }}>
              <EmojiEventsIcon className="card-icon" />
              <h2 className="card-title">¿Cómo donar?</h2>
              <ol className="card-content list-decimal list-inside space-y-2">
                <li>Selecciona los alimentos a donar</li>
                <li>Coordina la recolección con nuestro equipo</li>
                <li>Recibe tu certificado digital</li>
                <li>Sigue el impacto de tu donación</li>
              </ol>
            </div>

            <div className="donate-card animate-scaleIn" style={{ animationDelay: '0.4s' }}>
              <FavoriteIcon className="card-icon" />
              <h2 className="card-title">Beneficios</h2>
              <ul className="card-content list-disc list-inside space-y-2">
                <li>Certificado de donación digital</li>
                <li>Reporte de impacto mensual</li>
                <li>Deducción de impuestos</li>
                <li>Reconocimiento en nuestra plataforma</li>
              </ul>
            </div>
          </div>

          <div className="stats-container">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="stat-card"
                style={{ animationDelay: `${0.6 + i * 0.2}s` }}
              >
                {stat.icon}
                <div className="stat-number">
                  {displayStats[i].toLocaleString()}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="/donate" className="donate-button animate-fadeInUp">
              Donar en Quito
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DonateBAQ; 