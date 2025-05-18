import { jsPDF } from 'jspdf';
import QRCode from 'qrcode';
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
    img.src = '/certificates/login.png';

    // Esperar a que la imagen se cargue
    await new Promise((resolve) => {
      img.onload = resolve;
    });

    // Agregar la imagen de fondo
    doc.addImage(img, 'PNG', 0, 0, 297, 210);

    // Configurar el texto
    doc.setFontSize(40);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'bold');
    
    // Centrar el nombre
    const nameWidth = doc.getTextWidth(data.name);
    const pageWidth = 297;
    const nameX = (pageWidth - nameWidth) / 2;
    doc.text(data.name, nameX, 100);

    // Agregar la fecha
    doc.setFontSize(20);
    const dateWidth = doc.getTextWidth(data.date);
    const dateX = (pageWidth - dateWidth) / 2;
    doc.text(data.date, dateX, 120);

    // Generar QR con la URL de la página de mensaje
    const qrUrl = `${window.location.origin}/qr-message`;
    const qrCode = await QRCode.toDataURL(qrUrl, {
      width: 200,
      margin: 1,
      color: {
        dark: '#000000',
        light: '#ffffff'
      }
    });

    // Agregar el QR al certificado
    doc.addImage(qrCode, 'PNG', 20, 140, 30, 30);

    // Agregar texto del QR
    doc.setFontSize(10);
    doc.text("Escanea para unirte al cambio", 55, 155);

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