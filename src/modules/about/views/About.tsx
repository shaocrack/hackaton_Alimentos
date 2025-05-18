import React, { useEffect, useState } from 'react';
import Layout from '../../layout/Layout';
import GroupIcon from '@mui/icons-material/Group';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import './About.css';

const stats = [
  { icon: <TrendingUpIcon className="stat-icon text-orange-500" />, label: 'Platos Entregados', value: 38167550 },
  { icon: <PeopleAltIcon className="stat-icon text-green-500" />, label: 'Personas Beneficiadas', value: 82973 },
  { icon: <GroupIcon className="stat-icon text-blue-500" />, label: 'Organizaciones Atendidas', value: 149 },
];

const About: React.FC = () => {
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
      <div className="about-container">
        <div className="about-overlay" />
        <div className="about-content">
          <h1 className="about-title animate-fadeIn">
            Conócenos
          </h1>
          
          <div className="about-cards">
            <div className="about-card animate-scaleIn">
              <GroupIcon className="card-icon" />
              <h2 className="card-title">¿Quiénes somos?</h2>
              <p className="card-content">
                Somos una organización sin fines de lucro dedicada a combatir el hambre en Ecuador y el mundo, 
                conectando donadores con quienes más lo necesitan a través de una plataforma innovadora y transparente.
              </p>
            </div>

            <div className="about-card animate-scaleIn" style={{ animationDelay: '0.2s' }}>
              <EmojiObjectsIcon className="card-icon" />
              <h2 className="card-title">Nuestra Misión</h2>
              <p className="card-content">
                Crear un mundo sin hambre, promoviendo la solidaridad y el aprovechamiento de recursos alimentarios 
                mediante la innovación tecnológica y el compromiso social.
              </p>
            </div>

            <div className="about-card animate-scaleIn" style={{ animationDelay: '0.4s' }}>
              <VolunteerActivismIcon className="card-icon" />
              <h2 className="card-title">Nuestros Valores</h2>
              <ul className="card-content list-disc list-inside space-y-2">
                <li>Solidaridad y empatía</li>
                <li>Transparencia y honestidad</li>
                <li>Innovación y tecnología</li>
                <li>Compromiso y responsabilidad</li>
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
        </div>
      </div>
    </Layout>
  );
};

export default About; 