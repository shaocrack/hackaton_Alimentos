import React, { useState } from 'react';
import {
    Box,
    Button,
    FormControl,
    TextField,
    Typography,
    RadioGroup,
    FormControlLabel,
    Radio,
    Autocomplete,
} from '@mui/material';

const bankOptions = [
    'Banco Pichincha',
    'Banco Guayaquil',
    'Banco del Pacífico',
    'Produbanco',
    'Banco Internacional',
    'Banco Bolivariano',
    'Banco de Loja',
    'Banco Solidario',
    'Banco General Rumiñahui',
    'Banco ProCredit',
    'Banco Santander',
    'BBVA',
    'Citibank',
    'Scotiabank',
    'HSBC',
    'JP Morgan Chase',
    'Bank of America',
    'Wells Fargo',
    'Deutsche Bank',
    'BNP Paribas',
];

const BankPayment: React.FC = () => {
    const [accountType, setAccountType] = useState('Ahorros');
    const [bank, setBank] = useState('');
    const [accountNumber, setAccountNumber] = useState('');

    const handleAccountTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAccountType(event.target.value);
    };

    const handleBankChange = (_: any, value: string | null) => {
        setBank(value || '');
    };

    const handleAccountNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAccountNumber(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle donation logic here
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                width: '100%',
                maxWidth: '100%',
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
            }}
        >
            <Typography variant="h6" gutterBottom>
                Pago Bancario
            </Typography>

            <FormControl component="fieldset" sx={{ width: '100%' }}>
                <Typography variant="subtitle1" gutterBottom>
                    Tipo de cuenta
                </Typography>
                <RadioGroup
                    row
                    value={accountType}
                    onChange={handleAccountTypeChange}
                    name="account-type"
                >
                    <FormControlLabel value="Ahorros" control={<Radio />} label="Ahorros" />
                    <FormControlLabel value="Corriente" control={<Radio />} label="Corriente" />
                </RadioGroup>
            </FormControl>

            <Autocomplete
                options={bankOptions}
                value={bank}
                onChange={handleBankChange}
                renderInput={(params) => (
                    <TextField {...params} label="Entidad Bancaria" placeholder="Selecciona el banco..." required />
                )}
                fullWidth
            />

            <TextField
                fullWidth
                label="Número Cuenta"
                placeholder="Número de la cuenta*"
                value={accountNumber}
                onChange={handleAccountNumberChange}
                required
            />

            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
            >
                DONAR AHORA
            </Button>
        </Box>
    );
};

export default BankPayment;
