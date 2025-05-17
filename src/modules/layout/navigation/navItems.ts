export const navItems = [
  { path: "/", label: "Home", type: "simple" },
  { path: "/about", label: "Get to know us", type: "simple" },
  {
    path: "/donate-hope",
    label: "Donate Hope",
    type: "multiple",
    entries: [
      {
        path: "/donate-food-ecuador",
        label: "Donate Food in Ecuador",
        type: "submenu",
      },
      { path: "/donate-baq", label: "Donate – BAQ", type: "submenu" },
      { path: "/volunteering", label: "Volunteering", type: "submenu" },
    ],
  },
  {
    path: "/find-food",
    label: "Find Food",
    type: "multiple",
    entries: [
      {
        path: "/social-organizations",
        label: "Social Organizations",
      },
      {
        path: "/family-assistance",
        label: "Family Assistance Program",
        type: "simple",
      },
    ],
  },

  { path: "/contact", label: "Contact us", type: "simple" },
  { path: "/donate", label: "Donate", type: "simple" }, // Destacado
];