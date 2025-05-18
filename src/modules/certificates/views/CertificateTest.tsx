import React from 'react';
import { CertificateGenerator } from './CertificateGenerator';
import type { CertificateData } from '../models/CertificateModel';
import Layout from '../../layout/Layout';

export const CertificateTest: React.FC = () => {
  // Datos de prueba
  const testData: CertificateData = {
    id: "CERT-001",
    name: "Juan Pérez",
    date: new Date().toLocaleDateString(),
    amount: 1500.00,
    paymentId: "PAY-123"
  };

  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Prueba de Certificados</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Vista previa del certificado */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Vista Previa del Certificado</h2>
            <div className="relative w-full aspect-[297/210] bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src="/certificates/login.png" 
                alt="Certificado" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-4xl font-bold text-black mb-4">{testData.name}</div>
                <div className="text-xl text-black">{testData.date}</div>
              </div>
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