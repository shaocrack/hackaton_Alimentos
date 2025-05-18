import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, Tabs, Tab, Box, useMediaQuery, useTheme } from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CloseIcon from '@mui/icons-material/Close';
import pagoPluxImage from "../../../../assets/fondo-login.ad46618a68c76307267f.svg";
import cardsFooter from "../../../../assets/cards.png";

import { ppxDefaultData } from '../../../../config/ppx/ppx.data';
import { PpxButton } from './PpxButton';
import BankPayment from './BankPayment';
import { PaypalButtons } from './PaypalButtons';


type PaymentOptionType = 'PagoPlux' | 'Paypal' | 'Debito Bancario';

interface PaymentOptionDialogProps {
    open: boolean;
    onClose: () => void;
    onSelect: (option: PaymentOptionType) => void;
}

const paymentOptions: { value: PaymentOptionType; icon: React.ReactElement }[] = [
    { value: 'PagoPlux', icon: <PaymentIcon color="primary" fontSize="large" /> },
    { value: 'Paypal', icon: <CreditCardIcon color="primary" fontSize="large" /> },
    { value: 'Debito Bancario', icon: <AccountBalanceIcon color="primary" fontSize="large" /> },
];

const PaymentOptionDialog: React.FC<PaymentOptionDialogProps> = ({ open, onClose, onSelect }) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const theme = useTheme();
    const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
    const isMdDown = useMediaQuery(theme.breakpoints.down('md'));

    const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
        setSelectedTab(newValue);
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth={false}
            PaperProps={{
                sx: {
                    width: isSmDown ? '98vw' : isMdDown ? '90vw' : '60%',
                    height: isSmDown ? '98vh' : isMdDown ? '90vh' : "80vh",
                    m: isSmDown ? 0 : 4,
                    borderRadius: isSmDown ? 0 : 2,
                }
            }}
        >
            <DialogTitle>
                Selecciona un método de pago
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{ position: 'absolute', right: 8, top: 8 }}
                    size="large"
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent sx={{ p: isSmDown ? 1 : 3 }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: isSmDown ? 'column' : 'row',
                        alignItems: isSmDown ? 'stretch' : 'flex-start',
                    }}
                >
                    <Tabs
                        value={selectedTab}
                        onChange={handleTabChange}
                        aria-label="Métodos de pago"
                        orientation={isSmDown ? 'horizontal' : 'vertical'}
                        variant={isSmDown ? 'scrollable' : 'standard'}
                        sx={{
                            borderRight: isSmDown ? 0 : 1,
                            borderBottom: isSmDown ? 1 : 0,
                            borderColor: 'divider',
                            minWidth: isSmDown ? 'auto' : 180,
                            mb: isSmDown ? 2 : 0,
                            '& .MuiTab-root': {
                                minWidth: 0,
                                padding: isSmDown ? 1 : 2,
                                flexDirection: 'row',
                                alignItems: 'center',
                                fontSize: isSmDown ? 14 : 16,
                            },
                            '& .MuiTab-iconWrapper': {
                                marginRight: 1,
                                marginBottom: 0,
                            },
                        }}
                    >
                        {paymentOptions.map((option) => (
                            <Tab
                                key={option.value}
                                icon={option.icon}
                                label={isSmDown ? "" : option.value}
                                aria-label={option.value}
                                sx={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    '&.Mui-selected': {
                                        backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                    },
                                }}
                            />
                        ))}
                    </Tabs>
                    <Box sx={{ flex: 1, p: isSmDown ? 1 : 2 }}>
                        {selectedTab === 0 && (
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: isSmDown ? 'column' : 'row',
                                    alignItems: isSmDown ? 'center' : 'flex-start',
                                    justifyContent: 'flex-start',
                                    height: isSmDown ? 'auto' : '100%',
                                    minHeight: isSmDown ? 'auto' : '450px',
                                    backgroundImage: `url(${pagoPluxImage})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    borderRadius: 3,
                                    overflow: 'hidden',
                                    p: isSmDown ? 1 : 0,
                                }}
                            >
                                <Box
                                    sx={{
                                        background: '#ffffff',
                                        borderRadius: 2,
                                        p: isSmDown ? 2 : 4,
                                        margin: 3,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        width: isSmDown ? '100%' : 300,
                                        minWidth: isSmDown ? 'auto' : 260,
                                        maxWidth: isSmDown ? '100%' : 340,
                                        boxShadow: 1,
                                    }}
                                >
                                    <h2 style={{
                                        marginBottom: isSmDown ? 16 : 24,
                                        color: '#1976d2',
                                        fontWeight: 700,
                                        fontSize: isSmDown ? 24 : 34
                                    }}>
                                        Realizar Pago
                                    </h2>
                                    <PpxButton data={ppxDefaultData} />
                                    <Box sx={{ height: isSmDown ? 12 : 24 }} />
                                    <img src={cardsFooter} alt="" width={isSmDown ? 140 : 210} />
                                </Box>
                            </Box>
                        )}
                        {selectedTab === 1 && (
                            <Box>
                                <PaypalButtons  
                                    amount={100}
                                    currency={"USD"}
                                    onSuccess={() => {
                                        console.log("Procesado correctamente")
                                    }}
                                    onError={() => {
                                        console.log("Error al procesar")
                                    }}
                                />
                            </Box>
                        )}
                        {selectedTab === 2 && (
                            <Box>
                                <h3 style={{ fontSize: isSmDown ? 18 : 22 }}>Pago con Débito Bancario</h3>
                                <BankPayment/>
                            </Box>
                        )}
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default PaymentOptionDialog;