import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

interface PaypalButtonsProps {
    amount: number;
    currency?: string;
    onSuccess: (details: any) => void;
    onError?: (error: any) => void;
}

export const PaypalButtons: React.FC<PaypalButtonsProps> = ({
    amount,
    currency = "USD",
    onSuccess,
    onError,
}) => {
    const [loading, setLoading] = useState(false);

    const handlePay = async () => {
        setLoading(true);
        try {
  

            setTimeout(() => {
                setLoading(false);
                onSuccess({ id: "PAYID-MOCK", amount, currency });
            }, 2000);
        } catch (error) {
            setLoading(false);
            onError?.(error);
        }
    };

    return (
        <button
            id="pay"
            type="button"
            disabled={loading}
            className="ppx-btn"
            title="Botón para pagar con PayPal"
            aria-label="Botón para pagar con PayPal"
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: loading ? "#0070ba99" : "#0070ba",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: loading ? "not-allowed" : "pointer",
                fontSize: 18,
                width: "200px",
                height: "48px",
                flex: 1,
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                transition: "background 0.2s",
            }}
            onClick={handlePay}
        >
            <span
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    width: "100%",
                    justifyContent: "center",
                }}
            >
                {loading ? (
                    <CircularProgress size={24} sx={{ color: "white" }} />
                ) : (
                    <span
                        title="Servicio de pago PayPal"
                        style={{ fontWeight: 700, fontSize: 22, letterSpacing: 1 }}
                    >
                        PayPal
                    </span>
                )}
                <span title="Iniciar pago">Pagar</span>
            </span>
        </button>
    );
};
