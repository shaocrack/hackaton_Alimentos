import { jsPDF } from 'jspdf';
import type { CertificateData, CertificateService } from '../models/CertificateModel';

export class CertificateServiceImpl implements CertificateService {
  async generateCertificate(data: CertificateData): Promise<Blob> {
    const doc = new jsPDF();
    
    // Configurar el documento
    doc.setFontSize(20);
    doc.text('Certificado de Pago', 105, 20, { align: 'center' });
    
    // Agregar información del certificado
    doc.setFontSize(12);
    doc.text(`ID: ${data.id}`, 20, 40);
    doc.text(`Nombre: ${data.name}`, 20, 50);
    doc.text(`Fecha: ${data.date}`, 20, 60);
    doc.text(`Monto: $${data.amount}`, 20, 70);
    doc.text(`ID de Pago: ${data.paymentId}`, 20, 80);
    
    // Convertir a Blob
    return doc.output('blob');
  }

  downloadCertificate(certificate: Blob, filename: string): void {
    const url = window.URL.createObjectURL(certificate);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }
} 