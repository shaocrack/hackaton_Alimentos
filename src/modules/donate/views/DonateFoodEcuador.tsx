import React, { useEffect, useState } from 'react';
import Layout from '../../layout/Layout';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PeopleIcon from '@mui/icons-material/People';
import './DonateFoodEcuador.css';

const stats = [
  { icon: <RestaurantIcon className="stat-icon text-green-500" />, label: 'Toneladas Donadas', value: 1250 },
  { icon: <LocalShippingIcon className="stat-icon text-blue-500" />, label: 'Entregas Realizadas', value: 8500 },
  { icon: <PeopleIcon className="stat-icon text-orange-500" />, label: 'Familias Beneficiadas', value: 25000 },
];

const DonateFoodEcuador: React.FC = () => {
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
            Donar Alimentos en Ecuador
          </h1>
          
          <p className="donate-subtitle animate-fadeIn">
            Únete a nuestra misión de combatir el hambre en Ecuador. Tu donación puede marcar la diferencia 
            en la vida de miles de familias que necesitan apoyo.
          </p>

          <div className="donate-cards">
            <div className="donate-card animate-scaleIn">
              <RestaurantIcon className="card-icon" />
              <h2 className="card-title">¿Qué puedes donar?</h2>
              <ul className="card-content list-disc list-inside space-y-2">
                <li>Alimentos no perecederos</li>
                <li>Productos enlatados</li>
                <li>Granos y cereales</li>
                <li>Productos de higiene</li>
              </ul>
            </div>

            <div className="donate-card animate-scaleIn" style={{ animationDelay: '0.2s' }}>
              <LocalShippingIcon className="card-icon" />
              <h2 className="card-title">¿Cómo donar?</h2>
              <ol className="card-content list-decimal list-inside space-y-2">
                <li>Selecciona los alimentos a donar</li>
                <li>Coordina la entrega con nuestro equipo</li>
                <li>Recibe tu certificado de donación</li>
                <li>Sigue el impacto de tu donación</li>
              </ol>
            </div>

            <div className="donate-card animate-scaleIn" style={{ animationDelay: '0.4s' }}>
              <PeopleIcon className="card-icon" />
              <h2 className="card-title">Beneficios</h2>
              <ul className="card-content list-disc list-inside space-y-2">
                <li>Certificado de donación digital</li>
                <li>Transparencia en la distribución</li>
                <li>Impacto medible en la comunidad</li>
                <li>Deducción de impuestos</li>
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
              Donar Ahora
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DonateFoodEcuador; 