import React from 'react';
import type { CertificateData } from '../models/CertificateModel';
import { CertificateServiceImpl } from '../services/CertificateService';

interface CertificateGeneratorProps {
  paymentData: CertificateData;
}

export const CertificateGenerator: React.FC<CertificateGeneratorProps> = ({ paymentData }) => {
  const certificateService = new CertificateServiceImpl();

  const handleGenerateCertificate = async () => {
    try {
      const certificate = await certificateService.generateCertificate(paymentData);
      const filename = `certificado-${paymentData.id}.pdf`;
      certificateService.downloadCertificate(certificate, filename);
    } catch (error) {
      console.error('Error al generar el certificado:', error);
    }
  };

  return (
    <div className="certificate-generator">
      <button 
        onClick={handleGenerateCertificate}
        className="generate-button"
      >
        Generar Certificado
      </button>
    </div>
  );
}; 