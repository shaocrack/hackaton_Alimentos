import React, { useState } from 'react';
import './App.css';
import PpxButton from "./components/PpxButton.tsx";
import { pluxPaymentData } from './configuration/ppx.data';
import type { PluxPaymentData } from "../types/plux.types";

const App: React.FC = () => {
  // Opcionalmente, puedes usar un estado para modificar los datos de pago
  const [paymentData, setPaymentData] = useState<PluxPaymentData>(pluxPaymentData);

  // Ejemplo de cómo actualizar los datos de pago
  const updatePaymentAmount = (newAmount: string) => {
    setPaymentData(prevData => ({
      ...prevData,
      PayboxBase12: newAmount
    }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ejemplo de integración con PLUX</h1>
        
        {/* Ejemplo de formulario para modificar el monto (opcional) */}
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="amount">Monto a pagar: $</label>
          <input 
            type="text" 
            id="amount" 
            value={paymentData.PayboxBase12}
            onChange={(e) => updatePaymentAmount(e.target.value)}
            style={{ marginRight: '10px' }}
          />
        </div>
        
        {/* Componente del botón de pago */}
        <div style={{ marginTop: '20px' }}>
          <PpxButton data={paymentData} />
        </div>
      </header>
    </div>
  );
};

export default App;