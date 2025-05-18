import type { PpxPaymentData } from "./ppx.types";


/**
 * Inicializa los datos del pago en PLUX
 * @param dataPago Datos de pago para inicializar
 */
export const iniciarDatos = (dataPago: PpxPaymentData): void => {
  if (window.Data) {
    window.Data.init(dataPago);
  } else {
    console.error("No se ha cargado correctamente el script de PLUX");
  }
};

/**
 * Recarga los datos del pago en PLUX
 * @param data Datos de pago para recargar
 */
export const reload = (data: PpxPaymentData): void => {
  if (window.Data) {
    window.Data.reload(data);
  } else {
    console.error("No se ha cargado correctamente el script de PLUX");
  }
};