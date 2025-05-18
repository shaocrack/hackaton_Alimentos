import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../layout/Layout';
import './QRMessage.css';

export const QRMessage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirigir después de 5 segundos
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="message-container text-center text-white p-8 max-w-2xl mx-auto">
          <h1 className="message-title text-5xl font-bold mb-6">
            ¡SÉ PARTE DEL CAMBIO!
          </h1>
          <p className="message-subtitle text-3xl mb-8 font-semibold">
            POR UN ECUADOR Y MUNDO SIN HAMBRE
          </p>
          <div className="redirect-message">
            <p className="text-xl">
              Redirigiendo a la página principal...
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}; 