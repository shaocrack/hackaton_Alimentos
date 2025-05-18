import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ExpandLess, ExpandMore, Favorite } from "@mui/icons-material";
import baqLogo from "../../../assets/logo.webp";
import { navItems } from "../navigation/navItems";
import hoverSoundFile from "../../../assets/donate.webm";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openCollapse, setOpenCollapse] = useState<Record<string, boolean>>({});
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuIndex, setMenuIndex] = useState<number | null>(null);
  const hoverSound = new Audio(hoverSoundFile);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);
  const toggleCollapse = (label: string) =>
    setOpenCollapse((prev) => ({ ...prev, [label]: !prev[label] }));

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setAnchorEl(event.currentTarget);
    setMenuIndex(index);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuIndex(null);
  };

  const drawer = (
    <Box sx={{ textAlign: "left", mt: 2 }}>
      <Box sx={{ mb: 2, textAlign: "center" }}>
        <img src={baqLogo} alt="BAQ Logo" style={{ height: 40 }} />
      </Box>
      <List>
        {navItems.map((item) => {
          if (item.type === "multiple" && item.entries) {
            return (
              <Box key={item.label}>
                <ListItemButton onClick={() => toggleCollapse(item.label)}>
                  <ListItemText primary={item.label} />
                  {openCollapse[item.label] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse
                  in={openCollapse[item.label]}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {item.entries.map((subItem) => (
                      <ListItemButton
                        key={subItem.path}
                        component={Link}
                        to={subItem.path}
                        onClick={handleDrawerToggle}
                        sx={{ pl: 4 }}
                        selected={location.pathname === subItem.path}
                      >
                        <ListItemText primary={subItem.label} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </Box>
            );
          }

          return item.path ? (
            <ListItemButton
              key={item.path}
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
              selected={location.pathname === item.path}
              sx={{
                ...(item.label === "Donate" && {
                  color: "#fb8c00",
                  fontWeight: "bold",
                }),
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          ) : (
            <ListItemButton
              key={item.label}
              disabled
              sx={{
                ...(item.label === "Donate" && {
                  color: "#fb8c00",
                  fontWeight: "bold",
                }),
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#eb8022" }}>
        <Toolbar>
          {/* Logo */}
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

          {/* Spacer + Desktop nav */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              justifyContent: "flex-end",
              gap: 2,
            }}
          >
            {navItems.map((item, index) => {
              const isDonate =
                item.label.toLowerCase() === "donate" ||
                item.label.toLowerCase() === "donar";

              if (item.type === "multiple" && item.entries) {
                return (
                  <Box
                    key={item.label}
                    onMouseEnter={(e) => handleMenuOpen(e, index)}
                    onMouseLeave={handleMenuClose}
                    sx={{
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    <Button
                      color="inherit"
                      sx={{
                        textTransform: "none",
                        fontSize: 16,
                        "&:hover": {
                          cursor: "pointer", // Forzamos el cursor si hay overrides globales
                        },
                        pt: 1.1
                      }}
                    >
                      {item.label}
                      <ExpandMore fontSize="small" />
                    </Button>
                    <Menu
                      anchorEl={anchorEl}
                      open={menuIndex === index}
                      onClose={handleMenuClose}
                      MenuListProps={{ onMouseLeave: handleMenuClose }}
                      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                      transformOrigin={{ vertical: "top", horizontal: "left" }}
                    >
                      {item.entries.map((subItem) => (
                        <MenuItem
                          key={subItem.path}
                          component={Link}
                          to={subItem.path}
                          onClick={handleMenuClose}
                          selected={location.pathname === subItem.path}
                        >
                          {subItem.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                );
              }

              return item.path ? (
                <Button
                  startIcon={isDonate ? <Favorite fontSize="small" /> : null}
                  key={item.path}
                  component={Link}
                  to={item.path}
                  variant={isDonate ? "contained" : "text"}
                   onMouseEnter={() => {
                    if (isDonate) {
                      hoverSound.currentTime = 0;
                      hoverSound.play().catch(() => {}); // evita errores si no está permitido aún
                    }
                  }}
                  sx={{
                    fontSize: isDonate ? 17 : 16,
                    minWidth: 120,
                    fontWeight: isDonate ? "bold" : "normal",
                    color: isDonate ? "#fb8c00" : "inherit",
                    backgroundColor: isDonate ? "#fff" : "transparent",
                    textTransform: "none",
                    borderRadius: isDonate ? "8px" : "4px",
                    border: isDonate ? "2px solid transparent" : "none",
                    boxShadow: isDonate
                      ? "0 0 10px rgba(251, 140, 0, 0.6), 0 0 20px rgba(251, 140, 0, 0.4)"
                      : "none",
                    transition: "all 0.4s ease-in-out", // clave para suavidad

                    animation: isDonate ? "pulse 2s infinite" : "none",

                    "&:hover": {
                      backgroundColor: isDonate ? "transparent" : "#fff",
                      backgroundImage: isDonate
                        ? "linear-gradient(45deg, #FF5100FF, #ffc107)"
                        : "none",
                      border: isDonate ? "2px solid #fff" : "none",
                      color: isDonate ? "#fff" : "#ff6f00",
                      boxShadow: isDonate
                        ? "0 0 15px rgba(255, 152, 0, 0.9), 0 0 30px rgba(255, 152, 0, 0.6)"
                        : "none",
                      transform: isDonate ? "scale(1.05)" : "none",
                      borderRadius: "8px",
                      transition: "all 0.4s ease-in-out", // transición en hover también
                    },
                    
                    "@keyframes pulse": {
                      "0%": {
                        transform: "scale(1)",
                        boxShadow: "0 0 0 0 rgba(251, 140, 0, 0.7)",
                      },
                      "70%": {
                        transform: "scale(1.05)",
                        boxShadow: "0 0 0 15px rgba(251, 140, 0, 0)",
                      },
                      "100%": {
                        transform: "scale(1)",
                        boxShadow: "0 0 0 0 rgba(251, 140, 0, 0)",
                      },
                    },
                  }}
                >
                  {item.label}
                </Button>
              ) : (
                <Button
                  key={item.label}
                  variant={isDonate ? "contained" : "text"}
                  sx={{
                    fontSize: 16,
                    color: isDonate ? "#fb8c00" : "inherit",
                    backgroundColor: isDonate
                      ? "rgba(255, 255, 255, 0.87)"
                      : "transparent",
                    borderRadius: isDonate ? "5px" : 0,
                    fontWeight: isDonate ? "bold" : "normal",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: isDonate
                        ? "#ccc"
                        : "rgba(255, 255, 255, 0.87)",
                      borderRadius: "5px",
                    },
                  }}
                  disabled
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>

          {/* Icono Drawer en móvil */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", sm: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton color="inherit" edge="end" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { width: 260 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
