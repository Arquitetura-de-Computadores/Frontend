import { axiosInstance } from "./axiosInstance";

export const getTemperatura = async () => {
    const response = await axiosInstance.get("/temperatura");
    return response.data;
};

export const getUmidade = async () => {
    const response = await axiosInstance.get("/umidade");
    return response.data;
};

export const getStatusPostes = async () => {
    const response = await axiosInstance.get("/status");
    return response.data;
};