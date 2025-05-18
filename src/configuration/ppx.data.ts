  import type { PluxPaymentData } from '../../types/plux.types';

  // Configura los datos de pago para PLUX
  export const pluxPaymentData: PluxPaymentData = {
    /* Requerido. Email de la cuenta PagoPlux del Establecimiento */
    PayboxRemail: "abautista@pagoplux.com",
    
    /* Requerido. Email del usuario que realiza el pago */
    PayboxSendmail: "abautista@pagoplux.com",
      
    /* Requerido. Nombre del establecimiento en PagoPlux */
    PayboxRename: "Mi Tienda Online",
    
    /* Requerido. Nombre del usuario que realiza el pago */
    PayboxSendname: "Cliente Ejemplo",
    
    /* Requerido. Monto total de productos o servicios que no aplican impuestos */
    PayboxBase0: "0.00",
    
    /* Requerido. Monto total de productos o servicios que aplican impuestos (incluido el impuesto) */
    PayboxBase12: "100.00",
    
    /* Requerido. Descripción del pago */
    PayboxDescription: "Compra de productos en Mi Tienda Online",
    
    /* Requerido. Tipo de Ejecución (false para modo prueba) */
    PayboxProduction: false,
    
    /* Requerido. Ambiente de ejecución */
    PayboxEnvironment: "sandbox",
    
    /* Requerido. Lenguaje del Paybox */
    PayboxLanguage: "es",
    
    /* Requerido. Identifica el tipo de iframe de pagoplux */
    PayboxPagoPlux: true,
    
    /* Requerido. Dirección del tarjetahabiente */
    PayboxDirection: "Dirección de ejemplo 123",
    
    /* Requerido. Teléfono del tarjetahabiente */
    PayBoxClientPhone: "0991234567",
    
    /* Requerido. Identificación del tarjetahabiente */
    PayBoxClientIdentification: "1234567890",
    
    // Callback que se ejecuta al finalizar el proceso de pago
    onAuthorize: (response) => {
      if (response.status === "succeeded") {
        console.log("Respuesta de pago:", response);
        alert("Proceso completado con éxito");
        
        // Aquí puedes realizar acciones adicionales con los datos de respuesta
        // response.amount, response.deferred, response.cardInfo, etc.
      }
    }
  };