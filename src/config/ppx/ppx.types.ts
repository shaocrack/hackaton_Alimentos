export interface PpxPaymentData {
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
  PayboxRecurrent: boolean;
  PayboxIdPlan: string;
  PayboxPermitirCalendarizar: boolean;
  PayboxPagoInmediato: boolean;
  PayboxCobroPrueba: boolean;
  onAuthorize: (response: any) => void;
}
