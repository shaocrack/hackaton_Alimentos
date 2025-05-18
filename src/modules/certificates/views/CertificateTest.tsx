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
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Datos del Certificado:</h2>
          <div className="space-y-2">
            <p><strong>ID:</strong> {testData.id}</p>
            <p><strong>Nombre:</strong> {testData.name}</p>
            <p><strong>Fecha:</strong> {testData.date}</p>
            <p><strong>Monto:</strong> ${testData.amount}</p>
            <p><strong>ID de Pago:</strong> {testData.paymentId}</p>
          </div>
          
          <div className="mt-4">
            <CertificateGenerator paymentData={testData} />
          </div>
        </div>
      </div>
    </Layout>
  );
}; 