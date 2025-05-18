export {};

declare global {
  interface Window {
    Data: {
      init: (data: any) => void;
      reload: (data: any) => void;
    };
  }
}
