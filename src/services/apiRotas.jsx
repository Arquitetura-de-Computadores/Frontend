import { axiosInstance } from "./axiosInstance";

export const getTemperatura = async () => {
    const response = await fetch("http://localhost:5050/temperatura", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({})
    });
    return await response.json();
};

export const getUmidade = async () => {
    const response = await fetch("http://localhost:5050/umidade", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({})
    });
    return await response.json();
};

export const getLuz = async () => {
    const response = await fetch("http://localhost:5050/luz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({})
    });
    return await response.json();
};