import { useState } from "react";
import {  Box, Tabs, Tab, useTheme, useMediaQuery, Typography } from "@mui/material";
import Layout from "../../layout/Layout";
import { InformationForm } from "./components/InformationForm";
import { PaymentForm } from "./components/PaymentForm";
import donateImage from "../../../assets/donate-2.png";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PersonIcon from "@mui/icons-material/Person";

const Payment = () => {
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Layout>
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
        paddingTop={1}
        gap={2}
      >
        <Box flex={isMobile ? 1 : 0.45}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100%"
            p={4}
            bgcolor="background.paper"
          >
            <h1 className="title">Donar</h1>
            <p style={{ textAlign: "center" }}>
              Tu donación lleva esperanza a miles de familias. Completa los siguientes datos y sé parte del cambio.
            </p>
              <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#eb8022",
                paddingY: 2,
                borderRadius: 2 
              }}>
              <img

              src={donateImage}
              alt="donate-image"
              width={"80%"}
              style={{ borderRadius: 5 }}
            />
            <p style={{ textAlign: "center", paddingTop: 4 }}>
              <strong>
                1 de 4 niños menores de 5 años en Ecuador tiene desnutrición
                infantil crónica
              </strong>
              , una buena dieta es importante en los primeros mil días de vida
              del niño.
            </p>
            </Box>
          </Box>
        </Box>

        <Box flex={isMobile ? 1 : 0.5}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100%"
            
            borderRadius={2}
            bgcolor="background.paper"
            minWidth={isMobile ? "100%" : 350}
          >
            <Tabs
              value={activeStep}
              onChange={(_, newValue) => setActiveStep(newValue)}
              variant="fullWidth"
              sx={{
                mb: 4,
                width: "100%",
                "& .MuiTabs-indicator": {
                  backgroundColor: "#eb8022",
                  height: "2px",
                },
              }}
              centered
            >
              <Tab
                icon={<PersonIcon />}
                label="Información"
                id="tab-0"
                aria-controls="tabpanel-0"
                sx={{
                  fontSize: "small",
                  color: activeStep === 0 ? "#eb8022" : "#888",
                  borderBottom:
                    activeStep === 0
                      ? "2px solid #eb8022"
                      : "2px solid transparent",
                  "&.Mui-selected": {
                    color: "#eb8022",
                    borderBottom: "2px solid #eb8022",
                  },
                  "&:hover": {
                    color: "#fff",
                  },
                }}
              />
              <Tab
                icon={<CreditCardIcon />}
                label="Pago"
                id="tab-1"
                aria-controls="tabpanel-1"
                sx={{
                  fontSize: "small",
                  color: activeStep === 1 ? "#eb8022" : "#888",
                  borderBottom:
                    activeStep === 1
                      ? "2px solid #eb8022"
                      : "2px solid transparent",
                  "&.Mui-selected": {
                    color: "#eb8022",
                    borderBottom: "2px solid #eb8022",
                  },
                  "&:hover": {
                    color: "#fff",
                  },
                }}
              />

            </Tabs>

            {activeStep === 0 && (
              <InformationForm onNext={() => setActiveStep(1)} />
            )}
            {activeStep === 1 && (
              <PaymentForm onBack={() => setActiveStep(0)} />
            )}
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Payment;
