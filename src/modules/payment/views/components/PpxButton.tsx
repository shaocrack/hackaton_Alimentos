import { useEffect, useRef, useState } from "react";
import type { PpxPaymentData } from "../../../../config/ppx/ppx.types";
import { iniciarDatos } from "../../../../config/ppx/ppx.index";
import pagoPlusLogo from "../../../../assets/ppxlogo.png";
import { CircularProgress } from "@mui/material";

interface Props {
  data: PpxPaymentData;
}

export const PpxButton = ({ data }: Props) => {
  const [loading, setLoading] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Inicializar datos de pago cuando los datos cambian
  useEffect(() => {
    iniciarDatos(data);
  }, [data]);

  // Observer solo cuando loading es true
  useEffect(() => {
    if (!loading || !modalRef.current) return;

    const observer = new MutationObserver(() => {
      setLoading(false);
    });

    observer.observe(modalRef.current, {
      childList: true,
      subtree: true,
      attributes: true,
    });

    // Timeout to stop loading after 5 seconds
    timeoutRef.current = setTimeout(() => setLoading(false), 5000);

    return () => {
      observer.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [loading]);

  return (
    <>
      <div id="modalPaybox" ref={modalRef}></div>
      <form
        onSubmit={e => {
          e.preventDefault();
          setLoading(true);
          console.log("Form enviado");
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "3px solid #661AB6",
            borderRadius: "5px",
            padding: "8px",
            width: "92%",
            gap: "12px",
            opacity: loading ? 0.6 : 1,
            pointerEvents: loading ? "none" : "auto",
          }}
        >
            <button
            id="pay"
            type="submit"
            disabled={loading}
            className="ppx-btn"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              color: "#661AB6",
              border: "none",
              borderRadius: "5px",
              cursor: loading ? "not-allowed" : "pointer",
              fontSize: 18,
              width: "200px",
              height: "100%",
              flex: 1,
            }}
            >
            <span style={{ display: "flex", alignItems: "center", gap: "12px", width: "100%", justifyContent: "center" }}>
              {loading ? (
              <CircularProgress size={40} sx={{ color: "#661AB6" }} />
              ) : (
              <img
                src={pagoPlusLogo}
                alt="Pagar"
                style={{
                height: "35px",
                width: "35px",
                }}
              />
              )}
              <span>Pagar</span>
            </span>
            </button>
        </div>
      </form>
      <style>
        {`
          .ppx-btn:not(:disabled):hover {
            background: #661AB6;
            color: white;
            border: 3px solid #661AB6;
          }
        `}
      </style>
    </>
  );
};
