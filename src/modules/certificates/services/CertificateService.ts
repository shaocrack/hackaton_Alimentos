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

    // Cargar la imagen de fondo del certificado
    const img = new Image();
    img.src = '/certificates/CERTIFICADO.jpg';

    // Esperar a que la imagen se cargue
    await new Promise((resolve) => {
      img.onload = resolve;
    });

    // Agregar la imagen de fondo (A4 landscape: 297x210mm)
    doc.addImage(img, 'JPEG', 0, 0, 297, 210);

    // Nombre (centrado, más arriba)
    doc.setFontSize(36);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(34, 34, 34);
    const nameWidth = doc.getTextWidth(data.name);
    const nameX = (297 - nameWidth) / 2;
    const nameY = 105; // Ajustado para mejor visualización
    doc.text(data.name, nameX, nameY);

    // Fecha (centrado, más abajo)
    doc.setFontSize(20);
    doc.setFont('times', 'italic');
    const dateWidth = doc.getTextWidth(data.date);
    const dateX = (305 - dateWidth) / 2;
    const dateY = 192; // Ajustado para mejor visualización
    doc.text(data.date, dateX, dateY);

    // Generar QR
    const qrUrl = `${window.location.origin}/qr-message`;
    const qrCode = await QRCode.toDataURL(qrUrl, {
      width: 400,
      margin: 1,
      color: {
        dark: '#000000',
        light: '#ffffff'
      }
    });
    // QR (esquina inferior derecha)
    const qrSize = 22; // mm
    const qrX = 315 - qrSize - 40; // 40mm de margen derecho
    const qrY = 189 - qrSize - 30; // 30mm de margen inferior
    doc.addImage(qrCode, 'PNG', qrX, qrY, qrSize, qrSize);

    // Texto bajo el QR
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text("", qrX, qrY + qrSize + 7);

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