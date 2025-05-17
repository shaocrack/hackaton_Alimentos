import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import baqLogo from "../../../assets/logo.webp";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/donate", label: "Donate" },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawer = (
    <Box sx={{ textAlign: "center", mt: 2 }}>
      <Box sx={{ mb: 2 }}>
        <img src={baqLogo} alt="BAQ Logo" style={{ height: 40 }} />
      </Box>
      <List>
        {navItems.map(({ path, label }) => (
          <ListItemButton
            key={path}
            component={Link}
            to={path}
            selected={location.pathname === path}
            onClick={handleDrawerToggle}
          >
            <ListItemText primary={label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#eb8022" }}>
        <Toolbar>
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
              mr: 2,
            }}
          >
            <img src={baqLogo} alt="BAQ Logo" style={{ height: 40 }} />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            {navItems.map(({ path, label }, index) => {
              const isDonate = label.toLowerCase() === "donate";
              const isActive = location.pathname === path;

              return (
                <Button
                  key={path}
                  component={Link}
                  to={path}
                  variant={isDonate ? "contained" : "text"}
                  sx={{
                    fontSize: 16,
                    color: isDonate ? "#fb8c00" : "inherit",
                    backgroundColor: isDonate ? "rgba(255, 255, 255, 0.87)" : "transparent",
                    borderRadius: isDonate ? "5px" : 0,
                    fontWeight: isDonate ? "bold" : "normal",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: isDonate
                        ? "#ccc"
                        : "rgba(255, 255, 255, 0.87)",
                    },
                  }}
                >
                  {label}
                </Button>
              );
            })}
          </Box>

          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
