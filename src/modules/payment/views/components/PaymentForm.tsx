import React, { useState } from "react";
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
  MenuItem,
} from "@mui/material";
import { mainColor } from "../utils/InputStyles";
import PaymentOptionDialog from "./PaymentOption";

export const PaymentForm = ({ onBack }: { onBack: () => void }) => {
  const [formData, setFormData] = React.useState({
    tipoPago: "unico", // "unico" o "recurrente"
    monto: "5",
    months: 1,
    notas: "",
  });

  const [openDonationDialog, setOpenDonationDialog] = useState<boolean>(false);

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
    <Box
      sx={{
      width: "100%",

      px: { xs: 1, sm: 2 },
      }}
    >
      <Typography fontSize={18} gutterBottom>
      Detalles del pago
      </Typography>

      {/* Tipo de donación */}
      <FormControl
      component="fieldset"
      sx={{
        mt: 2,
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "flex-start", sm: "center" },
        gap: 2,
        width: "100%",
      }}
      >
      <FormLabel
        component="legend"
        sx={{
        mr: { sm: 2 },
        mb: { xs: 1, sm: 0 },
        flexBasis: { sm: "25%" },
        minWidth: 100,
        color: "#828282FF",
        "&.Mui-focused": {
          color: "#828282FF",
        },
        "&:hover, &:active": {
          color: "#828282FF",
        },
        }}
      >
        Tipo de donación
      </FormLabel>
      <RadioGroup
        row
        name="tipoPago"
        value={formData.tipoPago}
        onChange={handleChange}
        sx={{
        flexDirection: "row",
        flexBasis: { sm: "40%" },
        width: { xs: "100%", sm: "auto" },
        }}
      >
        <FormControlLabel
        value="unico"
        control={
          <Radio
          sx={{
            color: "#eb8022",
            "&.Mui-checked": { color: "#eb8022" },
            "&:hover": { backgroundColor: "rgba(235,128,34,0.08)" },
          }}
          />
        }
        label="Único"
        />
        <FormControlLabel
        value="recurrente"
        control={
          <Radio
          sx={{
            color: "#eb8022",
            "&.Mui-checked": { color: "#eb8022" },
            "&:hover": { backgroundColor: "rgba(235,128,34,0.08)" },
          }}
          />
        }
        label="Mensual"
        />
      </RadioGroup>
      {formData.tipoPago === "recurrente" && (
        <TextField
        label="Meses"
        name="months"
        type="number"
        size="small"
        sx={{
          width: { xs: "100%", sm: "40%" },
          minWidth: 120,
          ml: { sm: 2 },
          mt: { xs: 2, sm: 0 },
          "& label": {
          color: "#eb8022",
          "&.Mui-focused": { color: "#eb8022" },
          },
          "& .MuiOutlinedInput-root": {
          "& fieldset": { borderColor: "#eb8022" },
          "&:hover fieldset": { borderColor: "#eb8022" },
          "&.Mui-focused fieldset": { borderColor: "#eb8022" },
          },
        }}
        value={formData.months}
        onChange={handleChange}
        select
        >
        {Array.from({ length: 23 }, (_, i) => i + 2).map((val) => (
          <MenuItem key={val} value={val}>
          {val} meses
          </MenuItem>
        ))}
        </TextField>
      )}
      </FormControl>

      {/* Montos sugeridos */}
      <Typography variant="subtitle1" sx={{ mt: 3 }}>
      Selecciona un monto
      </Typography>
      <Box
      sx={{
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
        mt: 1,
        flexDirection: { xs: "column", sm: "row" },
      }}
      >
      {montosSugeridos.map((amount) => (
        <Button
        key={amount}
        variant={
          formData.monto === amount.toString() ? "contained" : "outlined"
        }
        onClick={() => seleccionarMonto(amount)}
        sx={{
          color: formData.monto === amount.toString() ? "#fff" : "#eb8022",
          borderColor: "#eb8022",
          backgroundColor:
          formData.monto === amount.toString()
            ? "#eb8022"
            : "transparent",
          "&:hover": {
          backgroundColor: "#eb8022",
          color: "#fff",
          borderColor: "#eb8022",
          },
          minWidth: 90,
          fontWeight: "bold",
          transition: "all 0.2s",
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
        "& .MuiOutlinedInput-root": {
          "& fieldset": { borderColor: "#eb8022" },
          "&:hover fieldset": { borderColor: "#eb8022" },
          "&.Mui-focused fieldset": { borderColor: "#eb8022" },
        },
        }}
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
      sx={{
        ...mainColor,
        "& .MuiOutlinedInput-root": {
        "& fieldset": { borderColor: "#eb8022" },
        "&:hover fieldset": { borderColor: "#eb8022" },
        "&.Mui-focused fieldset": { borderColor: "#eb8022" },
        },
      }}
      />

      {/* Botones de navegación */}
      <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        mt: 4,
        gap: 2,
      }}
      >
      <Button
        variant="outlined"
        onClick={onBack}
        sx={{
        flexBasis: { sm: "40%" },
        fontSize: "1rem",
        py: 1.5,
        borderColor: "#eb8022",
        color: "#eb8022",
        "&:hover": {
          backgroundColor: "#eb8022",
          color: "#fff",
          borderColor: "#eb8022",
        },
        width: { xs: "100%", sm: "auto" },
        }}
        startIcon={<span style={{ fontSize: "1rem" }}>←</span>}
      >
        Atrás
      </Button>
      <Button
        variant="contained"
        sx={{
        flexBasis: { sm: "60%" },
        backgroundColor: "#eb8022",
        "&:hover": { backgroundColor: "#d46f1d" },
        fontSize: "1rem",
        fontWeight: "bold",
        py: 1.5,
        width: { xs: "100%", sm: "auto" },
        boxShadow: "none",
        transition: "all 0.2s",
        }}
        endIcon={<span style={{ fontSize: "1rem" }}>→</span>}
        onClick={() => {
        // Validación opcional
        if (!formData.monto || Number(formData.monto) <= 0) {
          alert("Por favor ingresa un monto válido");
          return;
        }
        setOpenDonationDialog(true);
        }}
      >
        Donar
      </Button>
      </Box>
      <PaymentOptionDialog
      open={openDonationDialog}
      onClose={() => setOpenDonationDialog(false)}
      onSelect={(option) => {
        // Maneja la opción seleccionada aquí
        setOpenDonationDialog(false);
      }}
      />
    </Box>
  );
};
