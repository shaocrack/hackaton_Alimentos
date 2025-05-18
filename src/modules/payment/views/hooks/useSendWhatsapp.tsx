// src/modules/payment/hooks/useSendWhatsApp.ts
export const useSendWhatsApp = () => {
  const sendWhatsAppMessage = async (
    phone: string,
    message: string,
    imageUrl?: string
  ) => {
    try {
      const response = await fetch('https://sjki81xdr8.execute-api.us-east-1.amazonaws.com/Dev/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone,
          message,
          imageUrl, // opcional
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Error al enviar WhatsApp');
      }

      return result;
    } catch (error) {
      console.error('Error al enviar mensaje WhatsApp:', error);
    }
  };

  return { sendWhatsAppMessage };
};
