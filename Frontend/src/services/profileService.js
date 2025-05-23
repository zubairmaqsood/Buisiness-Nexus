import api from "./api";


export const getProfile = async (id) => {
    try {
        const response = await axios.get(`/api/profile/${id}`);
        return response.data
    }
    catch(error){
        return error?.response.data
    }
}

export const updateProfile = async (id,userData)=>{
    const response = await api.put(`/api/profile/:${id}`,userData)
    return response.status
}