import { useEffect } from "react";

export const usePayboxOpenObserver = (onOpen: () => void) => {
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "childList") {
          const paybox = document.querySelector(".c-paybox");
          if (paybox && getComputedStyle(paybox).display !== "none") {
            onOpen(); // El formulario fue mostrado
            break;
          }
        }
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [onOpen]);
};
