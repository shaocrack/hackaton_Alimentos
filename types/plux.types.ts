
// Interfaces para PLUX PayBox
export interface PluxPaymentResponse {
    status: string;
    amount?: string;
    deferred?: string;
    interest?: boolean;
    interestValue?: string;
    amountWoTaxes?: string;
    cardInfo?: string;
    cardIssuer?: string;
    cardType?: string;
    clientID?: string;
    clientName?: string;
    fecha?: string;
    id_transaccion?: string;
    state?: string;
    token?: string;
    tipoPago?: string;
  }
  
  export interface PluxPaymentData {
    PayboxRemail: string;
    PayboxSendmail: string;
    PayboxRename: string;
    PayboxSendname: string;
    PayboxBase0: string;
    PayboxBase12: string;
    PayboxDescription: string;
    PayboxProduction: boolean;
    PayboxEnvironment: "sandbox" | "prod";
    PayboxLanguage: "es";
    PayboxPagoPlux: boolean;
    PayboxDirection: string;
    PayBoxClientPhone: string;
    PayBoxClientIdentification: string;
    // Campos opcionales para pagos recurrentes
    PayboxRecurrent?: boolean;
    PayboxIdPlan?: string;
    PayboxPermitirCalendarizar?: boolean;
    PayboxPagoInmediato?: boolean;
    PayboxCobroPrueba?: boolean;
    onAuthorize: (response: PluxPaymentResponse) => void;
  }
  
  // Declaración de variables globales para TypeScript
  declare global {
    interface Window {
      Data: {
        init: (data: PluxPaymentData) => void;
        reload: (data: PluxPaymentData) => void;
      };
    }
  }