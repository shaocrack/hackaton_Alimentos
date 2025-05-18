import type { FC } from "react";
import { useEffect } from "react";
import type { CSSProperties } from "react";
import { iniciarDatos } from "../configuration/ppx.index";
import type { PluxPaymentData } from "../../types/plux.types";

interface PpxButtonProps {
  data: PluxPaymentData;
}

const PpxButton: FC<PpxButtonProps> = ({ data }) => {
  const estiloBoton: CSSProperties = {
    display: "block", // Cambiado a "block" para ser visible por defecto
    backgroundColor: "#FAFAFA",
    right: "80px",
    backgroundImage:
      "url(https://sandbox-paybox.pagoplux.com/img/pagar.png?v1)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "96px",
    width: "215px",
    border: "none",
    cursor: "pointer",
    backgroundSize: "contain",
    outline: "0",
    boxShadow: "0px 2px 2px lightgray",
  };

  useEffect(() => {
    // Inicializar datos de pago cuando el componente se monta o los datos cambian
    iniciarDatos(data);
  }, [data]);

  return (
    <>
      {/* Modal donde se mostrará el popup de pago */}
      <div id="modalPaybox"></div>
      
      {/* Botón de pago que activará el popup */}
      <button style={estiloBoton} id="pay" type="submit"></button>
    </>
  );
};

export default PpxButton;