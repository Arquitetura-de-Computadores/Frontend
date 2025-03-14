import { axiosInstance } from "./axiosInstance";

export const getTemperatura = async () => {
    try {
        const response = await axiosInstance.get("/temperatura");
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar temperatura:", error);
        throw error;
    }
};

export const getUmidade = async () => {
    try {
        const response = await axiosInstance.get("/umidade");
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar umidade:", error);
        throw error;
    }
};

export const getLuz = async () => {
    try {
        const response = await axiosInstance.get("/luz");
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar iluminação:", error);
        throw error;
    }
};  
