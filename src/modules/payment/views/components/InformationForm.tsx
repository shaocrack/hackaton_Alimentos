import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Autocomplete,
  MenuItem,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { useAffiliation } from "../hooks/useAffiliation";
import { CircularProgress, Alert, Backdrop } from "@mui/material";
import { mainColor } from "../utils/InputStyles";

const provinces = [
  "Azuay",
  "Bolívar",
  "Cañar",
  "Carchi",
  "Chimborazo",
  "Cotopaxi",
  "El Oro",
  "Esmeraldas",
  "Galápagos",
  "Guayas",
  "Imbabura",
  "Loja",
  "Los Ríos",
  "Manabí",
  "Morona Santiago",
  "Napo",
  "Orellana",
  "Pastaza",
  "Pichincha",
  "Santa Elena",
  "Santo Domingo",
  "Sucumbíos",
  "Tungurahua",
  "Zamora Chinchipe",
];

export const InformationForm = ({ onNext }: { onNext: () => void }) => {
  const { donor, loading, error, handleSearchDonor } = useAffiliation();
  const [formData, setFormData] = React.useState({
    nombres: "",
    cedula: "",
    email: "",
    telefono: "",
    pais: "Ecuador",
    provincia: "",
    direccion: "",
    notas: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  React.useEffect(() => {
    if (donor) {
      setFormData((prev) => ({
        ...prev,
        nombres: donor.nombre || "",
        email: "",
        telefono: "",
        direccion: donor.lugarDomicilio || "",
        provincia: "",
      }));
    }
  }, [donor]);

  return (
    <Box sx={{ mx: "auto", width: "100%" }}>
      <Typography fontSize={18} gutterBottom>
        Detalles de facturación
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <TextField
          required
          fullWidth
          label="Cédula de Identidad"
          name="cedula"
          value={formData.cedula}
          onChange={handleChange}
          margin="normal"
          sx={mainColor}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    sx={{ p: 1 }}
                    className="buttonPrimary"
                    onClick={() => handleSearchDonor(formData.cedula)}
                  >
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
        {error && (
          <Alert severity="error" sx={{ mt: 1 }}>
            {error}
          </Alert>
        )}

        <TextField
          required
          fullWidth
          label="Nombres y Apellidos"
          name="nombres"
          value={formData.nombres}
          onChange={handleChange}
          margin="normal"
          sx={mainColor}
        />
      </Box>
      <TextField
        required
        fullWidth
        label="Correo Electrónico"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        margin="normal"
        sx={mainColor}
      />

      <Box sx={{ display: "flex", gap: 2}}>
        <TextField
          fullWidth
          label="Teléfono (opcional)"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          margin="normal"
          sx={mainColor}
        />

        <TextField
          required
          select
          fullWidth
          label="País"
          name="pais"
          value={formData.pais}
          onChange={handleChange}
          margin="normal"
          sx={mainColor}
        >
          <MenuItem value="Ecuador">Ecuador</MenuItem>
        </TextField>
      </Box>

      <Autocomplete
        freeSolo
        options={provinces}
        onInputChange={(e, newValue) => {
          console.log(e);
          setFormData((prev) => ({ ...prev, provincia: newValue }));
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Región / Provincia (opcional)"
            margin="normal"
            fullWidth
            sx={mainColor}
          />
        )}
      />

      <TextField
        required
        fullWidth
        label="Dirección"
        name="direccion"
        value={formData.direccion}
        onChange={handleChange}
        margin="normal"
        sx={mainColor}
      />



      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Button
          variant="contained"
          onClick={onNext}
          sx={{
            mt: 2,
            backgroundColor: "#eb8022",
            "&:hover": { backgroundColor: "#d46f1d" },
          }}
        >
          Siguiente
        </Button>
      </Box>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
};
