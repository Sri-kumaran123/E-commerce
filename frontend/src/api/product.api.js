import api from './api';

export const createProduct = async (formData) =>{
    try {
        const res = await api.post('/product/create-product',formData,{
            headers: {
              'Content-Type': 'multipart/form-data', // ✅ tell axios this is FormData
            },});
        return res;
    } catch (err) {
        return Promise.reject(err.message);
    }
}

export const getAllProduct = async () =>{
    try {
        const res = await api.get('/get/all-product');
        return res;

    } catch (err) {
        return Promise.reject(err.message);
    }
}


export const uncheckGetProduct = async (id) =>{
    try {
        const res = await api.get(`/get/pro/${id}`);
        return res;
    } catch (err) {
        return Promise.reject(err);
    }
}