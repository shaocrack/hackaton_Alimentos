export interface CertificateData {
  id: string;
  name: string;
  date: string;
  amount: number;
  paymentId: string;
  
}

export interface CertificateService {
  generateCertificate(data: CertificateData): Promise<Blob>;
  downloadCertificate(certificate: Blob, filename: string): void;
} 