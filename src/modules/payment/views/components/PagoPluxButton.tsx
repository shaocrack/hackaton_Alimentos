import React, { useState } from 'react';
import type { PluxPaymentData } from '../../../../../types/plux.types.ts';
import PpxButton from '../../../../components/PpxButton.tsx';
import { pluxPaymentData } from '../../../../configuration/ppx.data.ts';
import {
  Box,
  Button,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Paper,
  Divider
} from "@mui/material";

export const PagoPluxButton: React.FC = () => {
  const [paymentData, setPaymentData] = useState<PluxPaymentData>({
    ...pluxPaymentData,
    PayboxBase12: "10" // Valor inicial de 10
  });

  // Montos sugeridos para donaciones
  const montosSugeridos = [5, 10, 20, 50];

  // Para la selección del tipo de donación
  const [tipoDonacion, setTipoDonacion] = useState<string>("unico");
  
  // Para notas adicionales
  const [notas, setNotas] = useState<string>("");

  // Maneja cambios en el tipo de donación
  const handleTipoDonacionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTipoDonacion(event.target.value);
  };

  // Actualiza el monto de pago
  const updatePaymentAmount = (newAmount: string) => {
    setPaymentData(prevData => ({
      ...prevData,
      PayboxBase12: newAmount
    }));
  };

  // Selecciona un monto predefinido
  const seleccionarMonto = (valor: number) => {
    updatePaymentAmount(valor.toString());
  };

  // Maneja cambios en el campo de monto personalizado
  const handleMontoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updatePaymentAmount(event.target.value);
  };

  // Maneja cambios en el campo de notas
  const handleNotasChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNotas(event.target.value);
  };

  // Estilo principal para el tema naranja
  const mainColor = {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#E67E22"
      }
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#E67E22"
    },
    "& .MuiRadio-root.Mui-checked": {
      color: "#E67E22"
    }
  };

  return (
    <Paper elevation={2} sx={{ 
      p: 3, 
      borderRadius: 2,
      maxWidth: 600,
      mx: "auto",
      mb: 4
    }}>
      <Typography variant="h5" component="h2" gutterBottom sx={{ color: "#333333", fontWeight: 600 }}>
        Pago con Plux
      </Typography>
      
      <Divider sx={{ my: 2 }} />

      {/* Tipo de donación */}
      <FormControl component="fieldset" sx={{ mt: 2, width: "100%" }}>
        <FormLabel component="legend" sx={{ color: "#555555" }}>Tipo de donación</FormLabel>
        <RadioGroup
          row
          name="tipoDonacion"
          value={tipoDonacion}
          onChange={handleTipoDonacionChange}
          sx={mainColor}
        >
          <FormControlLabel
            value="unico"
            control={<Radio />}
            label="Único"
          />
          <FormControlLabel
            value="recurrente"
            control={<Radio />}
            label="Mensual"
          />
        </RadioGroup>
      </FormControl>

      {/* Montos sugeridos */}
      <Typography variant="subtitle1" sx={{ mt: 3, color: "#555555" }}>
        Selecciona un monto
      </Typography>
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 1 }}>
        {montosSugeridos.map((amount) => (
          <Button
            key={amount}
            variant={
              paymentData.PayboxBase12 === amount.toString()
                ? "contained"
                : "outlined"
            }
            onClick={() => seleccionarMonto(amount)}
            sx={{
              backgroundColor: paymentData.PayboxBase12 === amount.toString() ? "#E67E22" : "transparent",
              borderColor: "#E67E22",
              color: paymentData.PayboxBase12 === amount.toString() ? "white" : "#E67E22",
              "&:hover": {
                backgroundColor: paymentData.PayboxBase12 === amount.toString() ? "#D35400" : "rgba(230, 126, 34, 0.08)",
                borderColor: "#D35400"
              }
            }}
          >
            ${amount}
          </Button>
        ))}
        <TextField
          label="Otro monto"
          type="number"
          name="monto"
          size="small"
          sx={{ 
            width: 120,
            ...mainColor
          }}
          value={paymentData.PayboxBase12}
          onChange={handleMontoChange}
          inputProps={{ min: 1 }}
        />
      </Box>

      {/* Notas adicionales */}
      <Typography variant="subtitle1" sx={{ mt: 4, color: "#555555" }}>
        Información adicional
      </Typography>
      <TextField
        fullWidth
        label="Notas del pedido (opcional)"
        name="notas"
        value={notas}
        onChange={handleNotasChange}
        margin="normal"
        multiline
        rows={3}
        sx={mainColor}
      />

      {/* Sección de botón de pago */}
      <Box sx={{ 
        display: "flex", 
        justifyContent: "center", 
        mt: 4,
        flexDirection: "column",
        alignItems: "center" 
      }}>
        <PpxButton data={paymentData} />
        
        <Typography variant="body2" sx={{ color: "#777777", mt: 2, display: "flex", alignItems: "center" }}>
          <span style={{ marginRight: "6px" }}>🔒</span> 
          Pago seguro procesado por PagoPlux
        </Typography>
      </Box>
    </Paper>
  );
};

export default PagoPluxButton;