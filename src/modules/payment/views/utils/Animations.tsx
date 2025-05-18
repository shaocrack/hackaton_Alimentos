export const pulseAnimation = {
  "@keyframes pulse": {
    "0%": {
      transform: "scale(1)",
      boxShadow: "0 0 0 0 rgba(235, 128, 34, 0.7)",
    },
    "70%": {
      transform: "scale(1.05)",
      boxShadow: "0 0 0 10px rgba(235, 128, 34, 0)",
    },
    "100%": {
      transform: "scale(1)",
      boxShadow: "0 0 0 0 rgba(235, 128, 34, 0)",
    },
  },
};
