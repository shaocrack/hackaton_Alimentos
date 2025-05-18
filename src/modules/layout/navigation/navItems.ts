export const navItems = [
  { path: "/", label: "Inicio", type: "simple" },
  { path: "/about", label: "Conócenos", type: "simple" },
  { path: "/dashboard", label: "Dashboard", type: "simple" },
  {
    path: "/donate-hope",
    label: "Dona Esperanza",
    type: "multiple",
    entries: [
      {
        path: "/donate-food-ecuador",
        label: "Donar Alimentos en Ecuador",
        type: "submenu",
      },
      { path: "/donate-baq", label: "Donar – BAQ", type: "submenu" },
      { path: "/volunteering", label: "Voluntariado", type: "submenu" },
    ],
  },
  {
    path: "/find-food",
    label: "Encontrar Alimentos",
    type: "multiple",
    entries: [
      {
        path: "/social-organizations",
        label: "Organizaciones Sociales",
      },
      {
        path: "/family-assistance",
        label: "Programa de Asistencia Familiar",
        type: "simple",
      },
    ],
  },

  { path: "/contact", label: "Contáctanos", type: "simple" },
  { path: "/donate", label: "Donar", type: "simple" }, // Destacado
];