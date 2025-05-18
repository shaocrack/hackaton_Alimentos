import { useState } from 'react';
import axios from 'axios';
import type { DonorData } from '../../models/DonorData';
import { getDonorUrl } from '../../../../config/api/apiUrls';

interface UseAffiliationResult {
    donor: DonorData | null;
    loading: boolean;
    error: string | null;
    handleSearchDonor: (dni: string) => Promise<void>;
    setError: React.Dispatch<React.SetStateAction<string | null>>;
}

export function useAffiliation(): UseAffiliationResult {
    const [donor, setDonor] = useState<DonorData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    
    const handleSearchDonor = async (dni: string) => {
        setLoading(true);
        setError(null);
        setDonor(null);
        try {
            // Replace with your actual API endpoint
            const url = await getDonorUrl(dni);
            const response = await axios.get<DonorData>(url);
            console.log(`Respuesta servicio: ${response.data}`);
            setDonor(response.data);
        } catch (err: any) {
            console.log(`Error consultando ${err}`);
            setError(err.response?.data?.message || 'Error obteniendo datos usuario');
        } finally {
            setLoading(false);
        }
    } 
    return { donor, loading, error, handleSearchDonor, setError };
}

