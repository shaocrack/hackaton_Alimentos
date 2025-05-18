import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../layout/Layout';
import './QRMessage.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TikTokIcon from '@mui/icons-material/MusicNote';

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
        <div className="message-container w-full max-w-6xl mx-auto p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Lado izquierdo - Imagen y mensaje */}
            <div className="text-center md:text-left">
              <div className="relative mb-8">
                <img 
                  src="/certificates/nin.jpg" 
                  alt="Banco de Alimentos" 
                  className="w-full max-w-md mx-auto rounded-lg shadow-xl"
                />
              </div>
              <h1 className="message-title text-5xl font-bold mb-6 text-white">
                ¡SÉ PARTE DEL CAMBIO!

              </h1>
              <p className="message-subtitle text-3xl mb-8 font-semibold text-white">
                POR UN ECUADOR Y MUNDO SIN HAMBRE
              </p>
            </div>

            {/* Lado derecho - QR y redes sociales */}
            <div className="flex flex-col items-center">
              <div className="bg-white p-6 rounded-lg shadow-xl mb-8">
                
              </div>
              
              {/* Redes sociales */}
              <div className="social-icons flex gap-6 mt-8">
                <a 
                  href="https://facebook.com/bancoalimentos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon-link"
                >
                  <FacebookIcon sx={{ fontSize: 40, color: 'white' }} />
                </a>
                <a 
                  href="https://instagram.com/bancoalimentos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon-link"
                >
                  <InstagramIcon sx={{ fontSize: 40, color: 'white' }} />
                </a>
                <a 
                  href="https://tiktok.com/@bancoalimentos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon-link"
                >
                  <TikTokIcon sx={{ fontSize: 40, color: 'white' }} />
                </a>
              </div>

              <div className="redirect-message mt-8">
                <p className="text-xl text-white">
                  Redirigiendo a la página principal...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}; 