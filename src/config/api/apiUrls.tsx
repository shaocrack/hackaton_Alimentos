export const getDonorUrl = async (dni: string): Promise<string> => {
    if (!dni || typeof dni !== "string" || dni.trim().length === 0) {
        throw new Error("Invalid DNI provided.");
    }

    const apiKey = import.meta.env.VITE_API_KEY_FIRMAS;
    console.log(apiKey)
    if (!apiKey || apiKey.trim().length === 0) {
        throw new Error("API key is missing.");
    }

    const encodedDni = encodeURIComponent(dni.trim());
    const encodedApiKey = encodeURIComponent(apiKey.trim());

    return `https://apifirmasdev.firmaecplus.com/public/api/proxy/firmas/http://nessoftfact-001-site6.atempurl.com/api/ConsultasDatos/ConsultaCedulaV2?Cedula=${encodedDni}&Apikey=${encodedApiKey}`;
};
