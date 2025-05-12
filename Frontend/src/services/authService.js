import api from "./api";

export const registerUser = async (userData) => {
    try {
        const response = await api.post("/api/auth/register", userData)
        return response.data
    } catch (error) {
        return error.response?.data
    }
}

export const loginUser = async (userData) => {
    try {
        const response = await api.post("/api/auth/login", userData)
        return response.data
    } catch (error) {
        return error.response?.data
    }
}