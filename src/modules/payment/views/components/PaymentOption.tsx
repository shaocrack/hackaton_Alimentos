import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, Tabs, Tab, Box } from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CloseIcon from '@mui/icons-material/Close';

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
    
    const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
        setSelectedTab(newValue);
        // Only update the selected tab, do not call onSelect here to avoid closing the dialog
    };
    
    return (
        <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
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
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                    <Tabs
                        value={selectedTab}
                        onChange={handleTabChange}
                        aria-label="Métodos de pago"
                        orientation="vertical"
                        sx={{
                            borderRight: 1,
                            borderColor: 'divider',
                            minWidth: 180,
                            '& .MuiTab-root': {
                                minWidth: 0,
                                padding: 2,
                                flexDirection: 'row',
                                alignItems: 'center',
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
                                label={option.value}
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
                    <Box sx={{ flex: 1, p: 2 }}>
                        {selectedTab === 0 && (
                            <Box>
                                {/* PagoPlux specific content */}
                                <h3>Pago con PagoPlux</h3>
                                {/* Add form fields here */}
                            </Box>
                        )}
                        {selectedTab === 1 && (
                            <Box>
                                {/* Paypal specific content */}
                                <h3>Pago con Paypal</h3>
                                {/* Add form fields here */}
                            </Box>
                        )}
                        {selectedTab === 2 && (
                            <Box>
                                {/* Debito Bancario specific content */}
                                <h3>Pago con Débito Bancario</h3>
                                {/* Add form fields here */}
                            </Box>
                        )}
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default PaymentOptionDialog;