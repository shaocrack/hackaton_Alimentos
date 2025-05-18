import React, { useEffect, useState } from 'react';
import { CertificateGenerator } from './CertificateGenerator';
import type { CertificateData } from '../models/CertificateModel';
import Layout from '../../layout/Layout';
import QRCode from 'qrcode';
import './CertificateTest.css';

export const CertificateTest: React.FC = () => {
  const [qrCode, setQrCode] = useState<string>('');

  // Datos de prueba
  const testData: CertificateData = {
    id: "CERT-001",
    name: "Juan Pérez",
    date: new Date().toLocaleDateString(),
    amount: 1500.00,
    paymentId: "PAY-123"
  };

  useEffect(() => {
    // Generar QR
    const qrData = {
      message: "¡Sé parte del cambio!",
      url: window.location.origin
    };

    QRCode.toDataURL(JSON.stringify(qrData), {
      width: 200,
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
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Certificados</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Vista previa del certificado */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Vista Previa del Certificado</h2>
            <div className="certificado-preview">
              <img 
                src="/certificates/CERTIFICADO.jpg" 
                alt="Certificado" 
                className="cert-bg"
              />
              <div className="cert-nombre">{testData.name}</div>
              <div className="cert-fecha">{testData.date}</div>
              {qrCode && (
                <img src={qrCode} alt="QR Code" className="cert-qr" />
              )}
            </div>
          </div>

          {/* Controles y datos */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Datos del Certificado:</h2>
            <div className="space-y-2 mb-4">
              <p><strong>Nombre:</strong> {testData.name}</p>
              <p><strong>Fecha:</strong> {testData.date}</p>
            </div>
            
            <div className="mt-4">
              <CertificateGenerator paymentData={testData} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}; 