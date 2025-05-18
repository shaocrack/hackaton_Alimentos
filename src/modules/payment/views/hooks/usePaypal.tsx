import { useEffect, useRef } from "react";

declare global {
    interface Window {
        paypal: any;
    }
}

interface UsePaypalOptions {
    amount: number;
    cart: Array<{ id: string; quantity: number }>;
    onSuccess?: (orderData: any) => void;
    onError?: (error: any) => void;
}

export function usePaypal(
    containerId: string,
    { amount, cart, onSuccess, onError }: UsePaypalOptions
) {
    const renderedRef = useRef(false);

    useEffect(() => {
        if (!window.paypal || renderedRef.current) return;

        const resultMessage = (message: string) => {
            const container = document.querySelector("#result-message");
            if (container) container.innerHTML = message;
        };

        const paypalButtons = window.paypal.Buttons({
            style: {
                shape: "rect",
                layout: "vertical",
                color: "gold",
                label: "paypal",
            },
            message: {
                amount,
            },
            async createOrder() {
                try {
                    const response = await fetch("/api/orders", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ cart }),
                    });

                    const orderData = await response.json();

                    if (orderData.id) {
                        return orderData.id;
                    }
                    const errorDetail = orderData?.details?.[0];
                    const errorMessage = errorDetail
                        ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
                        : JSON.stringify(orderData);

                    throw new Error(errorMessage);
                } catch (error) {
                    console.error(error);
                    onError?.(error);
                }
            },
            async onApprove(data: any, actions: any) {
                try {
                    const response = await fetch(
                        `/api/orders/${data.orderID}/capture`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                        }
                    );

                    const orderData = await response.json();
                    const errorDetail = orderData?.details?.[0];

                    if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
                        return actions.restart();
                    } else if (errorDetail) {
                        throw new Error(
                            `${errorDetail.description} (${orderData.debug_id})`
                        );
                    } else if (!orderData.purchase_units) {
                        throw new Error(JSON.stringify(orderData));
                    } else {
                        const transaction =
                            orderData?.purchase_units?.[0]?.payments?.captures?.[0] ||
                            orderData?.purchase_units?.[0]?.payments?.authorizations?.[0];
                        resultMessage(
                            `Transaction ${transaction.status}: ${transaction.id}<br>
                            <br>See console for all available details`
                        );
                        console.log(
                            "Capture result",
                            orderData,
                            JSON.stringify(orderData, null, 2)
                        );
                        onSuccess?.(orderData);
                    }
                } catch (error) {
                    console.error(error);
                    resultMessage(
                        `Sorry, your transaction could not be processed...<br><br>${error}`
                    );
                    onError?.(error);
                }
            },
        });

        paypalButtons.render(`#${containerId}`);
        renderedRef.current = true;

        // Cleanup
        return () => {
            renderedRef.current = false;
            // Optionally remove the rendered buttons if needed
            const container = document.getElementById(containerId);
            if (container) container.innerHTML = "";
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [amount, JSON.stringify(cart), containerId]);
}