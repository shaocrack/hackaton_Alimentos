import React, { useEffect, useState } from 'react';
import Layout from '../../layout/Layout';
import QRCode from 'qrcode';
import './QRMessage.css';

export const QRDisplay: React.FC = () => {
  const [qrCode, setQrCode] = useState<string>('');

  useEffect(() => {
    // Generar QR con la URL de la página de mensaje
    const qrUrl = `${window.location.origin}/qr-message`;
    QRCode.toDataURL(qrUrl, {
      width: 300,
      margin: 1,
      color: {
        dark: '#000000',
        light: '#ffffff'
      }
    }).then(url => {
      setQrCode(url);
    });
  }, []);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="message-container text-center text-white p-8 max-w-2xl mx-auto">
          <h1 className="message-title text-5xl font-bold mb-6">
            Escanea el QR
          </h1>
          <p className="message-subtitle text-2xl mb-8">
            Para ser parte del cambio
          </p>
          
          {qrCode && (
            <div className="bg-white p-4 rounded-lg inline-block mb-8">
              <img 
                src={qrCode} 
                alt="QR Code" 
                className="w-64 h-64"
              />
            </div>
          )}

          <div className="redirect-message">
            <p className="text-xl">
              ¡Únete a nuestra causa!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}; 