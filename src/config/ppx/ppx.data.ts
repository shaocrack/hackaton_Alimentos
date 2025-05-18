import type { PpxPaymentData } from "./ppx.types";

export const ppxDefaultData: PpxPaymentData = {
  PayboxRemail: "abautista@pagoplux.com", // Email de la cuenta PagoPlux del Establecimiento (Requerido)
  PayboxSendmail: "abautista@pagoplux.com", // Email del usuario que realiza el pago (Requerido)
  PayboxRename: "Mi Tienda Online", // Nombre del establecimiento en PagoPlux (Requerido)
  PayboxSendname: "Cliente Ejemplo", // Nombre del usuario que realiza el pago (Requerido)
  PayboxBase0: "0.00", // Monto total de productos o servicios que no aplican impuestos (Requerido)
  PayboxBase12: "100.00", // Monto total de productos o servicios que aplican impuestos (incluido el impuesto) (Requerido)
  PayboxDescription: "Compra de productos en Mi Tienda Online", // Descripción del pago (Requerido)
  PayboxProduction: false, // Tipo de Ejecución (false para modo prueba) (Requerido)
  PayboxEnvironment: "sandbox", // Ambiente de ejecución (Requerido)
  PayboxLanguage: "es", // Lenguaje del Paybox (Requerido)
  PayboxPagoPlux: true, // Identifica el tipo de iframe de pagoplux (Requerido)
  PayboxDirection: "Dirección de ejemplo 123", // Dirección del tarjetahabiente (Requerido)
  PayBoxClientPhone: "0991234567", // Teléfono del tarjetahabiente (Requerido)
  PayBoxClientIdentification: "1234567890", // Identificación del tarjetahabiente (Requerido)
  onAuthorize: (response: any) => { // Callback que se ejecuta al finalizar el proceso de pago
    if (response.status === "succeeded") {
      console.log("Respuesta de pago:", response);
      // Aquí puedes realizar acciones adicionales con los datos de respuesta
      // response.amount, response.deferred, response.cardInfo, etc.
    }
  },
  PayboxRecurrent: false, // Si tu tipo requiere estos campos, puedes mantenerlos o eliminarlos según corresponda
  PayboxIdPlan: "",
  PayboxPermitirCalendarizar: false,
  PayboxPagoInmediato: true,
  PayboxCobroPrueba: false,
};
