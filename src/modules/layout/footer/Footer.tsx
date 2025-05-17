import React from "react";
import { Box, Typography, Grid, Link as MuiLink } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import baqLogo from "../../../assets/logo.webp";

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: "#5c5c5c", color: "#fff", py: 4, px: 2 }}>
      <Grid container spacing={4} justifyContent="center">
        {/* Logo & Message */}
        <Grid item xs={12} md={4} textAlign="center">
          <Box mb={2}>
            <img src={baqLogo} alt="Banco de Alimentos Quito" style={{ height: 60 }} />
          </Box>
          <Typography variant="body2">
            Your <strong>Food Donation</strong> enables us to help <br />
            thousands of people have proper nutrition.
          </Typography>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Contact Information:
          </Typography>
          <Box display="flex" alignItems="center" mb={1}>
            <LocalPhoneIcon sx={{ mr: 1, color: "#eb8022" }} />
            <Typography color="#eb8022">Para Donantes</Typography>
          </Box>
          <Typography mb={2}>099 5450 969</Typography>

          <Box display="flex" alignItems="center" mb={1}>
            <LocalPhoneIcon sx={{ mr: 1, color: "#eb8022" }} />
            <Typography color="#eb8022">Para recibir alimentos</Typography>
          </Box>
          <Typography>097 8655 501</Typography>
        </Grid>

        {/* Social Media */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Nuestras redes sociales:
          </Typography>
          <Box display="flex" alignItems="center" mb={1}>
            <InstagramIcon sx={{ color: "#eb8022", mr: 1 }} />
            <MuiLink href="https://www.instagram.com/bancoalimentosquito" color="inherit" underline="hover">
              bancoalimentosquito
            </MuiLink>
          </Box>
          <Box display="flex" alignItems="center">
            <MusicNoteIcon sx={{ color: "#eb8022", mr: 1 }} />
            <MuiLink href="https://www.tiktok.com/@baqalimentos" color="inherit" underline="hover">
              baqalimentos
            </MuiLink>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
