import { jsPDF } from 'jspdf';
import type { CertificateData, CertificateService } from '../models/CertificateModel';

export class CertificateServiceImpl implements CertificateService {
  async generateCertificate(data: CertificateData): Promise<Blob> {
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4'
    });

    // Cargar la imagen de fondo
    const img = new Image();
    img.src = '/certificates/login.png'; // Ruta actualizada

    // Esperar a que la imagen se cargue
    await new Promise((resolve) => {
      img.onload = resolve;
    });

    // Agregar la imagen de fondo
    doc.addImage(img, 'PNG', 0, 0, 297, 210); // A4 landscape dimensions

    // Configurar el texto
    doc.setFontSize(40);
    doc.setTextColor(0, 0, 0); // Color negro
    doc.setFont('helvetica', 'bold');
    
    // Centrar el nombre
    const nameWidth = doc.getTextWidth(data.name);
    const pageWidth = 297; // Ancho de página A4 landscape
    const nameX = (pageWidth - nameWidth) / 2;
    doc.text(data.name, nameX, 100);

    // Agregar la fecha
    doc.setFontSize(20);
    const dateWidth = doc.getTextWidth(data.date);
    const dateX = (pageWidth - dateWidth) / 2;
    doc.text(data.date, dateX, 120);

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