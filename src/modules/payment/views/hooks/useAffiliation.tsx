import { useState } from 'react';
import axios from 'axios';
import type { DonorData } from '../../models/DonorData';

interface UseAffiliationResult {
    donor: DonorData | null;
    loading: boolean;
    error: string | null;
    getDonorByDni: (dni: string) => Promise<void>;
}

export function useAffiliation(): UseAffiliationResult {
    const [donor, setDonor] = useState<DonorData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const getDonorByDni = async (dni: string) => {
        setLoading(true);
        setError(null);
        setDonor(null);
        try {
            // Replace with your actual API endpoint
            const response = await axios.get<DonorData>(`/api/donors/${dni}`);
            setDonor(response.data);
        } catch (err: any) {
            setError(err.response?.data?.message || 'Error fetching donor data');
        } finally {
            setLoading(false);
        }
    };

    return { donor, loading, error, getDonorByDni };
}