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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E67E22", // Color naranja primario del Banco de Alimentos
    color: "white", // Texto blanco para contraste
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    fontWeight: "bold",
    height: "44px",
    width: "120px",
    border: "none",
    borderRadius: "8px", 
    cursor: "pointer",
    outline: "0",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease", // Transición suave para efectos hover
    position: "relative",
    padding: "0 12px",
  };

  const estiloHover: CSSProperties = {
    backgroundColor: "#D35400",
    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.15)",
    transform: "translateY(-1px)",
  };

  useEffect(() => {
    // Inicializar datos de pago cuando el componente se monta o los datos cambian
    iniciarDatos(data);
    
    // Agregar efecto hover
    const boton = document.getElementById("pay");
    if (boton) {
      boton.addEventListener("mouseenter", () => {
        Object.assign(boton.style, estiloHover);
      });
      boton.addEventListener("mouseleave", () => {
        Object.assign(boton.style, estiloBoton);
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
  }, [data]);

  return (
    <>
      {/* Modal donde se mostrará el popup de pago */}
      <center>
      <div id="modalPaybox"></div>
      </center>
      {/* Botón de pago que activará el popup */}
      <button style={estiloBoton} id="pay" type="submit">
        <center><span style={{ marginRight: "8px" }}>❤</span>Donar</center>
      </button>
    </>
  );
};

export default PpxButton;