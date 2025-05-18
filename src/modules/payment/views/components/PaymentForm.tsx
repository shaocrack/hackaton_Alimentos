import React from "react";
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
} from "@mui/material";
import { mainColor } from "../utils/InputStyles";

export const PaymentForm = ({ onBack }: { onBack: () => void }) => {
  const [formData, setFormData] = React.useState({
    tipoPago: "unico", // "unico" o "recurrente"
    monto: "",
    notas: ""
  });

  const montosSugeridos = [5, 10, 20, 50];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const seleccionarMonto = (valor: number) => {
    setFormData((prev) => ({ ...prev, monto: valor.toString() }));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography fontSize={18} gutterBottom>
        Detalles del pago
      </Typography>

      {/* Tipo de donación */}
      <FormControl component="fieldset" sx={{ mt: 2 }}>
        <FormLabel component="legend">Tipo de donación</FormLabel>
        <RadioGroup
          row
          name="tipoPago"
          value={formData.tipoPago}
          onChange={handleChange}
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
      <Typography variant="subtitle1" sx={{ mt: 3 }}>
        Selecciona un monto
      </Typography>
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 1 }}>
        {montosSugeridos.map((amount) => (
          <Button
            key={amount}
            variant={
              formData.monto === amount.toString()
                ? "contained"
                : "outlined"
            }
            onClick={() => seleccionarMonto(amount)}
          >
            ${amount}
          </Button>
        ))}
        <TextField
          label="Otro monto"
          type="number"
          name="monto"
          size="small"
          sx={{ width: 120 }}
          value={formData.monto}
          onChange={handleChange}
        />
      </Box>

            <Typography variant="h6" sx={{ mt: 4 }}>
              Información adicional
            </Typography>
      
            <TextField
              fullWidth
              label="Notas del pedido (opcional)"
              name="notas"
              value={formData.notas}
              onChange={handleChange}
              margin="normal"
              multiline
              rows={3}
              sx={mainColor}
            />

      {/* Botones de navegación */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
        <Button variant="outlined" onClick={onBack}>
          ← Atrás
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#eb8022",
            "&:hover": { backgroundColor: "#d46f1d" },
          }}
          onClick={() => {
            // Validación opcional
            if (!formData.monto || Number(formData.monto) <= 0) {
              alert("Por favor ingresa un monto válido");
              return;
            }
            alert("Formulario de pago listo para procesar");
          }}
        >
          Donar →
        </Button>
      </Box>
    </Box>
  );
};
