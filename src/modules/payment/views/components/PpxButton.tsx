import { useEffect } from "react";
import type { PpxPaymentData } from "../../../../config/ppx/ppx.types";
import { iniciarDatos } from "../../../../config/ppx/ppx.index";
import pagoPlusLogo from "../../../../assets/ppxlogo.png"


interface Props {
  data: PpxPaymentData;
}

export const PpxButton = ({ data }: Props) => {
 useEffect(() => {
    // Inicializar datos de pago cuando el componente se monta o los datos cambian
    iniciarDatos(data);
    
    // Agregar efecto hover
    const boton = document.getElementById("pay");
    if (boton) {
      boton.addEventListener("mouseenter", () => {
        Object.assign(boton.style);
      });
      boton.addEventListener("mouseleave", () => {
        Object.assign(boton.style);
      });
    }
    
    return () => {
      // Limpieza de event listeners
      const boton = document.getElementById("pay");
      if (boton) {
        boton.removeEventListener("mouseenter", () => {});
        boton.removeEventListener("mouseleave", () => {});
      }
    };
  }, [data]);

  return (
    <>
      <div id="modalPaybox"></div>
      <button
      id="pay"
      type="submit"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "blue",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        padding: "12px 24px",
        fontSize: "16px",
        gap: "12px",
      }}
      >
      <img
        src={pagoPlusLogo}
        alt="Pagar"
        style={{
        height: "40px",
        width: "40px",
        objectFit: "contain",
        }}
      />
      Pagar
      </button>
    </>
  );
};

